describe('screenshots', () => {
  it('test 1', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.screenshot({ capture: 'runner', blackout: ['.action-email'] })
    cy.screenshot({ capture: 'viewport', blackout: ['.action-email'] })
    cy.screenshot({ capture: 'fullPage' })
    cy.get('.action-email').screenshot({ capture: 'viewport' })
  })

  it('fails', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.then(() => {
      expect(true).to.be.false
    })
  })
})
