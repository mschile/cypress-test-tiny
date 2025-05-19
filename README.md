# cypress-test-tiny

> Tiny Cypress E2E test case

## Studio Memory Testing

### Test without Cloud Studio:
1. Run the following command:
  `CYPRESS_INTERNAL_ENV=staging npx cypress open`
2. Run the `todo.cy.js` spec
3. In DevTools take a heap snapshot (ensure to collect garbage first)
4. Enter studio mode for the `displays two todo items by default` test
5. Take a heap snapshot (ensure to college garbage first)
6. Record a command
7. Save the command
8. Take a heap snapshot (ensure to college garbage first)
9. Save the heap snapshots
10. Close Cypress

### Test with Cloud Studio:
1. Run the following command:
   `CYPRESS_INTERNAL_ENV=staging CYPRESS_ENABLE_CLOUD_STUDIO=true npx cypress open`
2. Run the `todo.cy.js` spec
3. In DevTools, take a heap snapshot (ensure to collect garbage first)
4. Enter studio mode for the `displays two todo items by default` test
5. Take a heap snapshot (ensure to college garbage first)
6. Accept the recommendation
7. Record a command
8. Save the command
9. Take a heap snapshot (ensure to collect garbage first)
9. Save the heap snapshots
10. Close Cypress

Compare the used memory between the two runs and verify nothing is out of the ordinary.
