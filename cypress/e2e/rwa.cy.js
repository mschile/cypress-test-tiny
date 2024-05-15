describe('real world app', { baseUrl: 'http://localhost:3500' }, () => {
  it('visits the real world app', () => {
    cy.visit('/')

    cy.get('#username').type('mctest')
    cy.get('#password').type('abc123', { log: false })
    cy.get('form').submit()

    cy.contains('Friends').click()
    cy.contains('Mine').click()
    cy.contains('Friends').click()
    cy.contains('Everyone').click()
  })
})
