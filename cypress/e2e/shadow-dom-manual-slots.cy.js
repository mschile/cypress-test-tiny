/* eslint-disable cypress/no-unnecessary-waiting */

describe('Shadow DOM', () => {
  it('captures shadow dom with manual slots', () => {
    cy.visit('/cypress/fixtures/shadow-dom-manual-slots.html')

    cy.get('button', { includeShadowDom: true }).contains('Groceries').click()
    cy.get('li').contains('Spinach')
    cy.get('li').contains('Olives')
    cy.get('li').contains('Chicken')
    cy.get('li').contains('Hammer').should('not.be.visible')
    cy.get('li').contains('Shelves').should('not.be.visible')
    cy.get('li').contains('Screws').should('not.be.visible')

    cy.wait(1000)
    cy.get('button', { includeShadowDom: true }).contains('Home').click()
    cy.get('li').contains('Hammer')
    cy.get('li').contains('Shelves')
    cy.get('li').contains('Screws')
    cy.get('li').contains('Spinach').should('not.be.visible')
    cy.get('li').contains('Olives').should('not.be.visible')
    cy.get('li').contains('Chicken').should('not.be.visible')
  })
})
