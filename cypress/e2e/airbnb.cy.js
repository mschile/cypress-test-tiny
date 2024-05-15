it("test passes", () => {
  cy.viewport('macbook-15')
  cy.visit('https://next.airbnb.com/?disable_announcement_curtain=true');
  cy.get('div').contains('Show map').click({
    scrollBehavior: false
  }).then(function() {
    cy.url().should('contain', 'drawer_open=true');
  });
  cy.get('[data-veloute="map/markers/BasePillMarker"]').then(function(initialMapPills) {
    cy.get('body').then(function() {
      cy.get('[aria-label="Airbnb Categories"] img').eq(2).click({
        scrollBehavior: false
      }).then(function() {
        cy.get('[data-veloute="map/markers/BasePillMarker"]').should('not.contain', initialMapPills);
      });
      cy.get('[data-veloute="map/markers/BasePillMarker"]').first().click({
        scrollBehavior: false
      }).then(function() {
        cy.get('[data-testid="card-container"]', {
          timeout: Cypress.config('defaultCommandTimeout') / 6
        }).should('exist');
      })
    })
  })
})
