// decrease the timeouts to ensure we don't hit the 2s correlation timeout
describe('service workers', { defaultCommandTimeout: 1000, pageLoadTimeout: 1000 }, () => {
  let sessionId

  const getSessionId = async () => {
    if (!sessionId) {
      const targets = (await Cypress.automation('remote:debugger:protocol', { command: 'Target.getTargets', params: {} })).targetInfos
      const serviceWorkerTarget = targets.reverse().find((target) => target.type === 'service_worker' && target.url === 'http://localhost:3500/fixtures/service-worker.js')

      ;({ sessionId } = await Cypress.automation('remote:debugger:protocol', { command: 'Target.attachToTarget', params: { targetId: serviceWorkerTarget.targetId, flatten: true } }))
    }

    return sessionId
  }

  const getEventListenersLength = async () => {
    const sessionId = await getSessionId()
    let result = await Cypress.automation('remote:debugger:protocol', { command: 'Runtime.evaluate', params: { expression: 'getEventListeners(self).fetch', includeCommandLineAPI: true }, sessionId })

    if (result.result.type === 'undefined') return 0

    result = await Cypress.automation('remote:debugger:protocol', { command: 'Runtime.getProperties', params: { objectId: result.result.objectId }, sessionId })

    const length = result.result.find((prop) => prop.name === 'length').value.value

    return length
  }

  const getOnFetchHandlerType = async () => {
    const sessionId = await getSessionId()

    const result = await Cypress.automation('remote:debugger:protocol', { command: 'Runtime.evaluate', params: { expression: 'self.onfetch', includeCommandLineAPI: true }, sessionId })

    return result.result.type
  }

  const detachFromTarget = async () => {
    await Cypress.automation('remote:debugger:protocol', { command: 'Target.detachFromTarget', params: { sessionId } })
  }

  const validateFetchHandlers = ({ listenerCount, onFetchHandlerType }) => {
    // skip validation in non-Chromium and electron browsers
    // non-Chromium browsers do not fully support the remote debugger protocol
    // possibly remove the electron check on https://github.com/cypress-io/cypress/issues/2118 is resolved
    if (Cypress.browser.family !== 'chromium' || Cypress.browser.name === 'electron') {
      cy.log('Skipping fetch handlers validation in non-Chromium and electron browsers')

      return
    }

    cy.then(() => {
      cy.wrap(getEventListenersLength()).should('equal', listenerCount).then(() => {
        if (onFetchHandlerType) cy.wrap(getOnFetchHandlerType()).should('equal', onFetchHandlerType)
      }).then(() => {
        cy.wrap(detachFromTarget())
      })
    })
  }

  const unregisterServiceWorker = () => {
    cy.wrap(navigator.serviceWorker.getRegistrations()).then((registrations) => {
      cy.wrap(Promise.all(registrations.map((registration) => registration.unregister())))
    })
  }

  beforeEach(() => {
    sessionId = null

    // unregister the service worker to ensure it does not affect other tests
    unregisterServiceWorker()
  })

  describe('a service worker that handles requests', () => {
    beforeEach(() => {
      cy.intercept('profile.json', (req) => {
        req.reply({
          statusCode: 301,
          headers: {
            location: 'http://localhost:3500/cypress/fixtures/profile2.json',
          },
        })
      })

      cy.intercept('https://localhost:3500/cypress/fixtures/service-worker.html', (req) => {
        req.reply({
          statusCode: 302,
          headers: {
            location: 'http://localhost:3500/cypress/fixtures/service-worker.html',
          },
        })
      })
    })

    it('supports using addEventListener with function', () => {
      cy.visit('cypress/fixtures/service-worker.html')
      cy.get('#output').should('have.text', 'done')
      validateFetchHandlers({ listenerCount: 1 })
    })
  })
})
