it("test passes", () => {
  cy.visit('cypress/fixtures/nextbank.html')

  cy.get("[ng-model*='transaction.targetBranchId']").siblings('div').find('input').realClick().clear().realType('Branch-Buckinghamshirea3mp{enter}')

  cy.wait(2000)
})

it("test passes", () => {
  cy.visit('cypress/fixtures/nextbank.html')

  cy.get("[ng-model*='transaction.targetBranchId']").siblings('div').find('input').realClick().clear().realType('Branch-Buckinghamshirea3mp{enter}')

  cy.wait(2000)
})
