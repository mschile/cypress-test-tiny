describe('deleted cookie', () => {
  it('succeeds redirecting', () => {
    cy.visit('http://localhost:8080/')
    cy.get('#login').click()

    cy.contains('Redirected Page')
  })
})
