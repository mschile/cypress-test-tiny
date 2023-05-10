/// <reference types="cypress" />

describe('example to-do app', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')

    cy.contains('Hello World!')
  })
})
