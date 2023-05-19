/// <reference types="cypress" />

context('Changes top', () => {
  it('visits example.cypress.io', () => {
    cy.log('visiting example.cypress.io')
    cy.visit('https://example.cypress.io/')
  })
})
