/// <reference types="cypress" />

describe('Test beforeEach intercepts', () => {
  beforeEach(() => {
    cy.intercept('POST', '/login', {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        message: 'success'
      }
    }).as('login')

    cy.visit('http://localhost:8080/')
  });

  it('test 1', () => {
    cy.get('#login').click()
    cy.wait('@login')
  })

  it('test 2', () => {
    cy.get('#login').click()
    cy.wait('@login')
  });
});
