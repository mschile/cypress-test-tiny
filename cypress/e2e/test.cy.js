/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('cypress/fixtures/dom.html')
  })

  it('displays two todo items by default', () => {
    cy.get('#button').click()
    cy.get('#events').then((el) => {
      const eventsFired = el.text()

      cy.task('log', eventsFired)
    })
  })
})
