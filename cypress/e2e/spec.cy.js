it('passes', () => {
  expect(true).to.equal(true)
  cy.request({
    method: 'POST',
    body: {
      client_id: 'abc',
      client_secret: "secret*",
      grant_type: 'type',
    },
    url: '/',
  }).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body.client_id).to.eq('abc')
    expect(response.body.client_secret).to.eq('secret*')
    expect(response.body.grant_type).to.eq('type')
  })
})
