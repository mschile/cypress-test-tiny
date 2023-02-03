describe('multiple session cookies', () => {
  it('succeeds redirecting', () => {
    cy.visit('http://localhost:8080/')

    cy.contains('Redirected Page')
    cy.contains('SESSION_ID=new_cookie_value')
  })
});
