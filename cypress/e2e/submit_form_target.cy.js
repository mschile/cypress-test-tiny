it('intercepts reload', () => {
  // TODO: Uncomment to fix the framebusting
  // cy.intercept('*submit-code.js', (req) => {
  //   req.on('response', (res) => {
  //     // the form is being dynamically created and has a target of _top which causes the framebusting, so we change it to _self
  //     res.body = res.body.replaceAll('_top', '_self')
  //   })
  // })

  cy.visit('/')
})
