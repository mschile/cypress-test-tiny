/* eslint-disable cypress/no-unnecessary-waiting */

describe('Shadow DOM', () => {
  beforeEach(() => {
    cy.visit('cypress/fixtures/shadow-dom.html')

    cy.wait(1000, { log: false })
  })

  it('captures shadow dom', () => {
    cy.get('#immediate-shadow', { includeShadowDom: true })
    cy.get('#add').click()
    cy.get('#delayed-shadow', { includeShadowDom: true })
  })

  it('supports adoptedStyleSheets', () => {
    cy.get('#example-component-header', { includeShadowDom: true }).should(
      'have.css',
      'color',
      'rgb(255, 0, 0)'
    )
    cy.get('#add-adopted-stylesheet', { includeShadowDom: true }).click()
    cy.get('#example-component-header', { includeShadowDom: true }).should(
      'have.css',
      'color',
      'rgb(0, 128, 0)'
    )
  })
})
