// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
Cypress.Commands.add('custom', { prevSubject: 'element'}, (subject, options) => {
  const log = Cypress.log({
    name: 'custom',
    message: options,
    consoleProps: () => {
      return {
        subject,
        options,
        'Test': undefined,
        'Test2': 'okay',
        fn: () => (console.log('okayyy'))
      }
    },
  })
  log.set({ $el: subject })
  log.snapshot().end()

  return subject
 })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
