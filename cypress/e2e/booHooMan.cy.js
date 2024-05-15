describe('booHooMan', () => {
  it('loads successfully', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

    cy.viewport(1920, 1080)
    cy.visit('https://www.boohooman.com/us/')
    cy.contains('ACCEPT ALL').click()
    cy.get('input').first().click().type('shirt')
    cy.get('a.product-link').first().click()
    cy.contains('XS').click()
    cy.get('#add-to-cart').click()
    cy.get('.mini-cart-link').click()
  })
})
