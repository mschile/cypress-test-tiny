describe("Verify news items on Yahoo are visible", () => {
  beforeEach(() => {
      // cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })

      // cy.intercept('/service-worker.js', {
      //     body: undefined
      // })
  });

  const parameterizedScenarios = [
      { category: "News",  numberOfItems: 25 },
      { category: "Entertainment",  numberOfItems: 25 },
      { category: "News",  numberOfItems: 25 },
      { category: "Entertainment",  numberOfItems: 25 },
      { category: "News",  numberOfItems: 25 },
      { category: "Entertainment",  numberOfItems: 25 },
      { category: "News",  numberOfItems: 25 },
      { category: "Entertainment",  numberOfItems: 25 },
      { category: "News",  numberOfItems: 25 },
      { category: "Entertainment",  numberOfItems: 25 },
      { category: "News",  numberOfItems: 25 },
      { category: "Entertainment",  numberOfItems: 25 },
      { category: "News",  numberOfItems: 25 },
      { category: "Entertainment",  numberOfItems: 25 },
      { category: "News",  numberOfItems: 25 }
  ];

  parameterizedScenarios.forEach((scenario) => {
      const category = scenario.category;
      const numberOfItems = scenario.numberOfItems;
      it(`Verify that items under category ${category} are visible, intentionally will fail`, () => {
          /* Print memory statistics */
          if (Cypress.browser.family === "chromium") {
              cy.window().then((window) => {
                  let performanceInfo = window.performance;
      
                  /* Compute the memory usage in MB */
                  const usedMemory = Number(performanceInfo.memory.usedJSHeapSize / (1024 * 1024)).toFixed(1);
                  const absoluteMaxMemory = Number(performanceInfo.memory.jsHeapSizeLimit  / (1024 * 1024)).toFixed(1);
                  const currentMaxMemory = Number(performanceInfo.memory.totalJSHeapSize  / (1024 * 1024)).toFixed(1);
                  const percentUsedMax = Number(performanceInfo.memory.usedJSHeapSize * 100 / performanceInfo.memory.jsHeapSizeLimit).toFixed(1);
                  const percentUsedActual = Number(performanceInfo.memory.usedJSHeapSize * 100 / performanceInfo.memory.totalJSHeapSize).toFixed(1);
                  // cy.task("log", `usedJSHeapSize: ${usedMemory}MB, ${percentUsedActual}% of current max ${currentMaxMemory}MB, ${percentUsedMax}% of absolute max ${absoluteMaxMemory}MB`);
              })
          }

          // When I navigate to yahoo
          cy.visit("https://ca.yahoo.com/", { timeout: 30000 });
  
          // When I open the {string} section
          // cy.findByRole("link", {name: category}).should("be.visible").click({force: true});
          cy.contains(category).click({force: true});
  
          // Then The {int} items on the page exist and can be navigated to
          /* Infinite scroll, so load some additional articles */
          cy.scrollTo("bottom");
          cy.scrollTo("bottom");
          cy.scrollTo("bottom");
      
          /* Check the first numberOfItems items  */
          for (let i = 0; i < numberOfItems; i++) {
              cy.get("[data-test-locator='stream-items']").children().eq(i).scrollIntoView().should("exist").click({force: true});
              cy.get("body").type("{esc}"); // Exit the article
              for (let j = 0; j < 50; j++) {
                  cy.log("Random additional data injected into the runner log");
              }

              /* Fail on the last iteration */
              if(i == 24) {
                  cy.wrap(false, { timeout: 1000 }).should("equal", true);
              }
          }

      });
  });
});
