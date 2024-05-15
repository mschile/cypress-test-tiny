/* eslint-disable cypress/no-unnecessary-waiting */

describe('focus', () => {
  it('captures focused elements', () => {
    cy.visit('/cypress/fixtures/focus.html')

    // outline is green since focus-visible applies
    // focus event is received
    // div has outline of blue
    cy.get('input').click().type('foo')
    
    // outline is red since focus-visible does not apply
    // focus event is received
    // div has outline of blue
    // cy.get('button').realClick()
  })
})
