/// <reference types="cypress" />

describe('example to-do app', () => {
  it('passes', () => {
    cy.visit('https://localhost:8080')

    cy.contains('Hello World!')
  })
})
