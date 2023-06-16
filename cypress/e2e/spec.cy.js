describe("Visit login page", () => {
  it("Working", () => {
    cy.visit("http://localhost:3000/#/about");
    cy.get("#root > div > h1").should("contain.text", "Single Page App");
    cy.get(".navbar > li").first().should("contain.text", "Home").next().should("contain.text", "About").next().should("contain.text", "Portfolio Details");
    cy.get("main h1").should("contain.text", "About");
  });
  it("Page is blank", () => {
    cy.visit("http://localhost:3000/#/about");
    cy.get("#root > div > h1").should("contain.text", "Single Page App");
    cy.get(".navbar > li").first().should("contain.text", "Home").next().should("contain.text", "About").next().should("contain.text", "Portfolio Details");
    cy.get(".about > h1").should("contain.text", "About");
  });
  it("Working on /", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#root > div > h1").should("contain.text", "Single Page App");
    cy.get(".navbar > li").first().should("contain.text", "Home").next().should("contain.text", "About").next().should("contain.text", "Portfolio Details");
    cy.get("main h1").should("contain.text", "You're home!");
  });
});
