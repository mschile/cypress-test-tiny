/// <reference types="cypress" />

describe('error tests', () => {
  it('errors', () => {
    cy.then(() => { throw new Error('error in test') })
  })

  it('fails with retry', { retries: 1 }, () => {
    cy.then(() => { throw new Error('errors with retries') })
  })

  it('succeeds after retry', { retries: 1 }, () => {
    if (Cypress.state('test').currentRetry() === 0) {
      cy.then(() => { throw new Error('error on first attempt') })
    }

    cy.log('succeeded on second attempt')
  })

  context('before hook', () => {
    before(() => {
      cy.then(() => { throw new Error('error in before hook') })
    })

    it('errors in before hook', () => {
      cy.log('before hook error should prevent this test from running')
    })
  })

  context('before each', () => {
    beforeEach(() => {
      cy.then(() => { throw new Error('error in before each hook') })
    })

    it('errors in before each hook', () => {
      cy.log('before each hook error should prevent this test from running')
    })
  })

  context('after hook', () => {
    after(() => {
      cy.then(() => { throw new Error('error in after hook') })
    })

    it('errors in after hook', () => {
      cy.log('after hook error should not affect this test')
    })
  })

  context('after each', () => {
    afterEach(() => {
      cy.then(() => { throw new Error('error in after each hook') })
    })

    it('errors in after each hook', () => {
      cy.log('after each hook error should not affect this test')
    })
  })

  context('assert error', () => {
    it('fails', () => {
      cy.on('fail', (err) => {
        return false
      })

      expect(10).to.equal(20)
    })
  })

  context('uncaught exception error', () => {
    it('fails and shows an error', () => {
      cy.document().then((doc) => {
        const el = doc.createElement('button')

        el.innerText = `Don't click it!`
        el.addEventListener('click', () => {
          throw new Error('An error!')
        })

        doc.body.appendChild(el)
      })
      cy.get('button').click()
    })
  })
})
