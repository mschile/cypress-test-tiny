/// <reference types="cypress" />

const CustomError = class extends Error {
  constructor(message) {
    super(message)
    this.name = 'CustomError'
    this.message = {
      code: 100,
      message: 'Odoo Session Expired',
      data: {
        name: 'odoo.http.SessionExpiredException',
      }
    }
  }
}

describe('error tests', () => {
  it('errors', () => {
    cy.then(() => { 
      throw new CustomError('Odoo Session Expired')
    })
  })

  it('errors', () => {
    cy.then(() => { throw 'string error' })
  })

  it('errors', () => {
    cy.then(() => { throw new URL('https://www.google.com') })
  })

  it('errors', () => {
    cy.then(() => { throw 500 })
  })

  it('errors', () => {
    cy.then(() => { throw false })
  })

  it('errors', () => {
    cy.then(() => { throw Symbol('foo') })
  })
})
