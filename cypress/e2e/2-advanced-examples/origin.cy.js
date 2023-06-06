/// <reference types="cypress" />

context('Cross Origin', () => {
  beforeEach(() => {
    cy.visit('https://example.com')
  })
  
  it('visits a cross origin page', () => {
    // Alias the route to wait for its response
    cy.intercept('GET', '**/comments/*').as('getComment')
    
    cy.origin('https://example.cypress.io', () => {
      cy.visit('https://example.cypress.io/commands/aliasing')
      cy.viewport(320, 480)
      // we have code that gets a comment when
      // the button is clicked in scripts.js
      cy.get('.network-btn').click()
  
      // https://on.cypress.io/wait
      cy.wait('@getComment').its('response.statusCode').should('eq', 200)
    })
  })
})
