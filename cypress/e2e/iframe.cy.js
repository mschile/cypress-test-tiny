describe('issue #6412: Illegal invocation when global parent defined', () => {
  it('does not throw - clicks element', () => {
    cy.visit('cypress/fixtures/global_parent_definition.html')

    cy.get('iframe:first')
    .then(($iframe) => {
      // cypress does not wrap this as a DOM element (does not wrap in jquery)
      cy.wrap($iframe.first().contents().find('body'))
    })
    .within(() => {
      cy.get('.foo')
      .click()
    })
  })
})
