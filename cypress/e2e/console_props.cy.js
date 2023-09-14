it ('has custom props', () => {
  cy.visit('https://example.cypress.io')
  cy.contains('Kitchen Sink').custom({ text: 'Hello World', window, fn: () => {} })
})
