const cypress = require('cypress')

cypress.run({
  spec: 'cypress/e2e/spec.cy.js',
}).then((results) => {
  console.log(results)
})

