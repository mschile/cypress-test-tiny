describe('Test', () => {
  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://webmap.onxmaps.com/backcountry/map')
  
      cy.get('input[type="email"]').type('mschile@cypress.io')
      cy.get('input[type="password"]').type('zye!jmy4tkc_uzx7QNR', { log: false })
  
      cy.get('button[data-test="login-submit-button"]').click()

      cy.get('button[data-test="zoom-in"]')
    })
  })

  it ('succeeds', () => {
    cy.visit('https://webmap.onxmaps.com/backcountry/map')
  })

  it ('succeeds 2', () => {
    cy.visit('https://webmap.onxmaps.com/backcountry/map')
  })
})
