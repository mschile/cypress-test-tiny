import React from 'react'
import HelloEarth from './HelloEarth'

describe('<HelloEarth />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HelloEarth />)
  })
})
