import React from 'react'
import HelloMars from './HelloMars'

describe('<HelloMars />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HelloMars />)
  })
})
