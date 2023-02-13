/// <reference types="cypress"/>
describe("suite",() => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/")
  })

  it("test",() =>{
    cy.get('#num1').type(12)
    cy.get('#num2').type(12)
    cy.get("button").click();
    cy.url().should("include", "/add")
  })
})
