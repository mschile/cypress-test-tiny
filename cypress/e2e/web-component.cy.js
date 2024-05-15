/* eslint-disable cypress/no-unnecessary-waiting */

describe('Shadow DOM', () => {
  it('captures shadow dom', () => {
    cy.visit('/cypress/fixtures/web-component.html')

    cy.get('button').contains('Food').click()
    cy.get('li').contains('Pizza')
    cy.get('li').contains('Pie')
    cy.get('li').contains('Beer')
    cy.get('li').contains('Chicken')
    cy.get('li').contains('Cat').should('not.be.visible')
    cy.get('li').contains('Dog').should('not.be.visible')

    cy.get('button').contains('Animals').click()
    cy.get('li').contains('Dog')
    cy.get('li').contains('Cat')
    cy.get('li').contains('Chicken')
    cy.get('li').contains('Pizza').should('not.be.visible')
    cy.get('li').contains('Beer').should('not.be.visible')
    cy.get('li').contains('Pie').should('not.be.visible')
  })
})
