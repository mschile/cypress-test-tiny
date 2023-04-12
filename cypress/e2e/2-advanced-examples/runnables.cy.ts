/// <reference types="cypress" />

before(() => {
  cy.log('before hook in spec')
})
beforeEach(() => {
  cy.log('before each hook in spec')
})
after(() => {
  cy.log('after hook in spec')
})
afterEach(() => {
  cy.log('after each hook in spec')
})

describe('describe block', () => {
  before(() => {
    cy.log('before hook in describe')
  })
  beforeEach(() => {
    cy.log('before each hook in describe')
  })
  after(() => {
    cy.log('after hook in describe')
  })
  afterEach(() => {
    cy.log('after each hook in describe')
  })
  context('context block', () => {
    before(() => {
      cy.log('before hook in context')
    })
    beforeEach(() => {
      cy.log('before each hook in context')
    })
    after(() => {
      cy.log('after hook in context')
    })
    afterEach(() => {
      cy.log('after each hook in context')
    })
    it('shows all runnables context', () => {
      cy.log('test in context')
    })
  })

  it.only('shows all runnables describe', () => {
    cy.log('test in describe')
  })
})

it('shows all runnables spec', () => {
  cy.log('test in spec')
})
