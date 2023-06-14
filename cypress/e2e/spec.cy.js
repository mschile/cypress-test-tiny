/// <reference types="cypress" />

describe('example spec', () => {
  it('succeeds', () => {
    cy.visit('https://docs.cypress.io/')
    cy.wait(20000)
  })
})
