describe('bingo', () => {
  it('check game categories', () => {
    // cy.intercept('GET', '**listId=livecasinoblackjack**').as('blackjack');
    cy.visit('/livecasino/blackjack');

    cy.wait(20000)

    // cy.get(_promotion_player.default.container).should('be.visible');
    // cy.get(_live_casino_lobby.default.searchInputField).should('be.visible');
    // cy.get(_live_casino_lobby.default.gameListArea).should('be.visible').its('length').should('be.at.least', 1);
    // cy.get('[data-test-name=game-tile]').should('be.visible');
    // // check blackjack section
    // cy.contains(_live_casino_lobby.default.gameListArea, 'Blackjack').should('be.visible').scrollIntoView();
    // cy.contains(_live_casino_lobby.default.gameListArea, 'Blackjack').within(() => {
    //   cy.get(_live_casino_lobby.default.gameListHeading).should('be.visible').and('have.text', 'Blackjack');
    // game-lobby/0.176.0/assets/svg/user.svg
      // cy.wait('@blackjack').then(({
      //   response
      // }) => {
      //   console.log(response.body)
      //   // const count = escapeRegExp(response.body.totalNumberOfGames.toString());
      //   // const string = new RegExp(`${count}\\sgame(s?)`);
      //   // cy.get(_live_casino_lobby.default.gameCount).invoke('text').should('match', string);
      // });
    //   cy.get(_live_casino_lobby.default.gameTile).should('be.visible').and('have.length', 30);
    //   cy.get(_live_casino_lobby.default.gameTile).first().find(_live_casino_lobby.default.gameTag).should('be.visible').invoke('text').then(text => {
    //     expect(text).to.be.oneOf(['Live', 'New', 'Play Alone']);
    //   });
    //   cy.get(_live_casino_lobby.default.loadMoreButton).should('have.text', 'Load More').click();
    //   cy.get(_live_casino_lobby.default.gameTile).should('be.visible').and('have.length', 60);
    //   cy.get(_live_casino_lobby.default.loadMoreButton).should('be.visible').and('have.text', 'Load More');
    // });
  })

  it('check game categories 2', () => {
    // cy.intercept('GET', '**listId=livecasinoblackjack**').as('blackjack');
    cy.visit('/livecasino/blackjack');

    cy.wait(20000)
  })
})

