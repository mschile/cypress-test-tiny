# cypress-test-tiny

> Tiny Cypress E2E test case

Remote server
```
npm i
npx cypress run --headed --spec cypress/e2e/spec-remote.cy.js -b chrome
```

Local server
```
npm i
npm start
npx cypress run --headed --spec cypress/e2e/spec-local.cy.js -b chrome
