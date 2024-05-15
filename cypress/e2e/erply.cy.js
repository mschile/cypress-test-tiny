describe('erply', () => {
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })

    cy.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  })

  it('does not time out', () => {
    cy.visit('https://epos.erply.com/latest/')

    cy.wait(15000)

    cy.then(() => {
      console.log('about to reload')
    })

    cy.reload()

    cy.wait(15000)
  })

  it('does not time out', () => {
    cy.visit('https://epos.erply.com/latest/')

    cy.wait(20000)
  })
})
