/* eslint-disable cypress/no-unnecessary-waiting */

describe('test isolation', { baseUrl: null, testIsolation: true }, () => {
  beforeEach(() => {
    cy.visit('cypress/fixtures/dom-with-browser-interactions.html')
  })

  describe('test isolation', () => {
    it('test 1', () => {
      cy.get('#text-target')
        .type('abc')
        .should('have.value', 'abc')
    })

    it('test 2', () => {
      cy.get('#text-target')
        .type('def')
        .should('have.value', 'def')
    })

    it('test 3', () => {
      cy.get('#text-target')
        .type('ghi')
        .should('have.value', 'ghi')
    })

    it('test 4', () => {
      cy.get('#text-target')
      .type('!')
      .should('have.value', '!')
      
      cy.visit('cypress/fixtures/dom-with-browser-interactions.html')
      cy.get('#text-target')
        .type('abc')
        .should('have.value', 'abc')
    })

    it('test 5', () => {
      cy.get('#text-target')
        .type('!')
        .should('have.value', '!')
    })
  })

  describe('test isolation', () => {
    it('test 6', () => {
      cy.get('#text-target')
        .type('abc')
        .should('have.value', 'abc')
    })

    it('test 7', () => {
      cy.get('#text-target')
        .type('def')
        .should('have.value', 'def')
    })
  })

  describe('back to test isolation', () => {
    it('test 8', () => {
      cy.get('#text-target')
        .type('abc')
        .should('have.value', 'abc')
    })
  })
})
