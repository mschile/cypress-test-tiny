describe('test', () => {
  it('succeeds', () => {
    cy.visit('cypress/fixtures/shadow.html')
    cy.contains("I'm in the shadow DOM", { includeShadowDom: true })
  })

  it('captures shadow dom', () => {
    cy.visit('cypress/fixtures/shadow-dom-pushed.html')
    cy.get('#add').click()
    cy.get('#in-shadow', { includeShadowDom: true })
    cy.get('#remove').click()
    cy.get('#in-shadow', { includeShadowDom: true }).should('not.exist')
  })
})
