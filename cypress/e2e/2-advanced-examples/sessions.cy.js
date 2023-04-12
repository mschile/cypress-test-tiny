/// <reference types="cypress" />

describe('session tests', () => {
  beforeEach(() => {
    cy.session('new session', () => {
      cy.log('log inside session')
    })

    cy.visit('https://example.cypress.io')
  })

  it('load', () => {
    cy.get('h1')
  })
})
