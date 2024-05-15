/// <reference types="cypress" />

import url from 'url'

describe('intercepts', () => {
  beforeEach(() => {
    cy.intercept('https://example.cypress.io/todo*', (req) => {
      const url1 = url.parse(req.url)
      console.log(url1)
      req.continue() 
    })
  })

  it('intercepts', () => {
    cy.visit('https://example.cypress.io/todo?foo=bar&foo=baz')
    cy.get('body').should('contain', 'todos')
  })
})
