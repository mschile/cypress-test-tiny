/// <reference types="cypress" />

it('succeeds after retry', { retries: 1 }, () => {
  // @ts-expect-error
  if (Cypress.state('test').currentRetry() === 0) {
    cy.then(() => { throw new Error('error on first attempt') })
  }

  cy.log('succeeded on second attempt')
})
