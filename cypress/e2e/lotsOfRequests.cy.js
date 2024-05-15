describe('lots of requests', () => {
  // runs really fast
  it('succeeds when making lots of requests', () => {
    cy.visit('http://localhost:8080')
    // cy.get('#table', { timeout: 120000 })
    cy.get('#loadTodos').click()
    cy.get('table tr').should('have.length', 200, { timeout: 10000 })
  })

  describe.only('test isolation on', { testIsolation: true }, () => {
    // splitting the test into two parts causes the test to run slow
    it('succeeds when making lots of requests', () => {
      cy.visit('http://localhost:8080')
    })
  
    it('succeeds when making lots of requests', () => {
      cy.visit('http://localhost:8080')
      // cy.get('#table', { timeout: 120000 })
      cy.get('#loadTodos').click()
      cy.get('table tr').should('have.length', 200, { timeout: 10000 })
    })
  })

  describe.only('test isolation off', { testIsolation: false }, () => {
    // splitting the test into two parts causes the test to run slow
    it('succeeds when making lots of requests', () => {
      cy.visit('http://localhost:8080')
    })
  
    it('succeeds when making lots of requests', () => {
      // cy.get('#table', { timeout: 120000 })
      cy.get('#loadTodos').click()
      cy.get('table tr').should('have.length', 200, { timeout: 10000 })
    })
  })

  describe.only('test isolation back on', { testIsolation: true }, () => {
    // splitting the test into two parts causes the test to run slow
    it('succeeds when making lots of requests', () => {
      cy.visit('http://localhost:8080')
    })
  
    it('succeeds when making lots of requests', () => {
      cy.visit('http://localhost:8080')
      // cy.get('#table', { timeout: 120000 })
      cy.get('#loadTodos').click()
      cy.get('table tr').should('have.length', 200, { timeout: 10000 })
    })
  })
})
