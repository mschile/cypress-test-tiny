/// <reference types="cypress" />

context('custom contains command', () => {
  afterEach(() => {
    cy.customContains()
  })

  it('test', () => {
    cy.wait(100)
  })
})
