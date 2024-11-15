/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('cypress/fixtures/dom.html')
  })

  it('can click element', () => {
    // expect(cy.$$('#id2 >div > p')).to.be.visible
    
    cy.get('#id2 >div > p').click()
  })
})
