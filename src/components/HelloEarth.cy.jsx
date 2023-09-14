import React from 'react'
import HelloEarth from './HelloEarth'

describe('<HelloEarth />', () => {
  it.only('test 1', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HelloEarth />)
    cy.get('#earth-text').type('Hello Earth').should('have.value', 'Hello Earth')
  })

  it('test 2', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HelloEarth />)
    cy.get('#earth-text').type('Where\'s Mars?').should('have.value', 'Where\'s Mars?')
  })

  it('test 3', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HelloEarth />)
    cy.get('#earth-text').type('abc').should('have.value', 'abc')
  })
})
