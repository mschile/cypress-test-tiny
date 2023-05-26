/// <reference types="cypress" />

context('Embedded iframe', () => {
  const getIframeBody = () => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return cy
      .get('iframe')
      .its('0.contentDocument.body').should('not.be.empty')
      // wraps "body" DOM element to allow
      // chaining more Cypress commands, like ".find(...)"
      // https://on.cypress.io/wrap
      .then(cy.wrap)
  }

  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/window')

    cy.window().then((win) => {
      const iframe = win.document.createElement('iframe')
      iframe.src = '/commands/aliasing'
      win.document.body.appendChild(iframe)
    })
  })

  it('can access embedded same origin iframe', () => {
    getIframeBody().find('.as-table').find('tbody>tr')
      .first().find('td').first()
      .find('button').as('firstBtn')

    // when we reference the alias, we place an
    // @ in front of its name
    cy.get('@firstBtn').click()

    cy.get('@firstBtn')
      .should('have.class', 'btn-success')
      .and('contain', 'Changed')
  })
})
