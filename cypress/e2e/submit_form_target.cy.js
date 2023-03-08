it('intercepts reload', () => {
  // TODO: Uncomment to fix the framebusting
  // cy.intercept('*submit-code.js', (req) => {
  //   req.on('response', (res) => {
  //     // the form is being dynamically created and has a target of _top which causes the framebusting, so we change it to _self
  //     res.body = res.body.replaceAll('_top', '_self')
  //   })
  // })

  cy.visit('/')

  // TODO: Uncomment to fix the framebusting
  // before clicking submit, stub document.createElement
  // and its property 'target' to not allow '_blank' (new tab) or '_top' (frame-busting)
  // and always have it at '_self' (current frame)
  // cy.document().then((doc) => {
  //   const create = doc.createElement.bind(doc)
  //   cy.stub(doc, 'createElement').callsFake((name) => {
  //     if (name === 'form') {
  //       const form = create('form')
  //       cy.stub(form, 'target').value('_self')
  //       return form
  //     } else {
  //       return create(name)
  //     }
  //   })
  // })

  cy.get('#submit').click()

  cy.contains('Form Submitted Page')
})
