/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example', () => {
    it('should pass', { viewportWidth: 1440 }, () => {
      cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })

      cy.visit('https://staging.talk.tv/');

      cy.get('[data-testid="SIGN_IN"]').click();

      // https://account.staging.wireless.radio
      cy.origin('https://account.staging.wireless.radio', () => {
        cy.url().should('include', '/login?');
        
        cy.get('li').contains('Register').click();
        cy.get('.message').should('contain.text', 'Step 1');
  
        cy.get('input[name="firstName"]').should('be.empty').type('AutoFiststname');
        cy.get('input[name="lastName"]').should('be.empty').type('AutoLastname');
        cy.get('input[name="email"]')
          .should('be.empty')
          .type(`AutoEM${Math.random().toString().substr(2, 9)}@gmail.com`);
        cy.get('input[name="password"]').should('be.empty').type('Timespass1!');
        cy.get('#terms-input').check();
        cy.get('#no-thanks-checkbox').check();
  
        cy.get('button[name="submit"]').click();
      })
    });
})
