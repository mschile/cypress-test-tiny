/// <reference types="cypress" />

describe('example spec', () => {
  it('succeeds', () => {
    cy.visit('http://localhost:8080/')
    cy.wait(20000)
  })
})
