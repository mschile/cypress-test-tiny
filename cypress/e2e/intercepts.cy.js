describe('test isolation false', { testIsolation: true }, () => {
  // beforeEach(() => {
  //   cy.intercept('https://jsonplaceholder.cypress.io/users', (req) => {
  //     req.on('response', (res) => {
  //       console.log('intercepted response', res)
  //       return new Promise((resolve) => {
  //         setTimeout(() => {
  //           res.body = res.body[0] = 'test'
  //           resolve(res)
  //         }, 2000)
  //       })
  //     })
  //   })
  //   cy.intercept('/test', (req) => {
  //     req.reply({
  //       body: '<div class="foo">Bar</div>',
  //       headers: {
  //         'content-type': 'text/html',
  //       },
  //     })
  //   })
  //   cy.intercept('https://example.cypress.io/commands/actions', (req) => {
  //     req.on('response', (res) => {
  //       return new Promise((resolve, reject) => {
  //         setTimeout(() => {
  //           // console.log('intercepted response', res)
  //           res.body = res.body.replaceAll('Actions', 'Huh?')
  //           resolve(res)
  //         }, 2000)
  //       })
  //     })
  //   })
  // })

  // it('test 1', () => {
  //   cy.visit('cypress/fixtures/dom.html')
  //   cy.get('.foo').should('have.text', 'Foo')
  //   cy.wait(2000)
  // })

  it.only('works with forceNetworkError', { browser: '!webkit' }, () => {
    const logs = []

    cy.on('log:added', (log) => {
      if (log.displayName === 'fetch') {
        logs.push(log)
      }
    })

    cy.intercept('/foo', { forceNetworkError: true }).as('alias')
    .then(() => {
      return fetch('/foo')
      .catch(() => {})
    })
    .wrap(logs)
    .should((logs) => {
      // retries...
      console.log('logs', logs)
      expect(logs).to.have.length.greaterThan(0)

      // for (const log of logs) {
      //   expect(log.err).to.include({ name: 'Error' })
      //   expect(log.consoleProps['Error']).to.be.an('Error')
      //   expect(log.snapshots.map((v) => v.name)).to.deep.eq(['request', 'error'])
      //   expect(log.state).to.eq('failed')
      // }
    })
  })
})
