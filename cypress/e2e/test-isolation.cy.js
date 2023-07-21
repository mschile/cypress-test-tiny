describe('test isolation', { testIsolation: false }, () => {
  it('test 1', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-email')
      .type('abc')
      .should('have.value', 'abc')
  })

  it('test 2', () => {
    cy.get('.action-email')
      .type('hello')
      .should('have.value', 'abchello')
  })
})
