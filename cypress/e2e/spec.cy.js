describe('upload tar file', () => {
  it('uploads tar file', () => {
    cy.fixture('users.tar.gz', null)
    .then((buffer) => {
      const blob = Cypress.Blob.arrayBufferToBlob(buffer, 'application/gzip')

      cy.request({
        method: "PUT",
        failOnStatusCode: true,
        url: 'http://localhost:8080/upload',
        encoding: null,
        body: blob,
        timeout: 50000,
      })
    })

    cy.readFile('cypress/downloads/uploaded_users.tar.gz').then((file) => {
      cy.readFile('cypress/fixtures/users.tar.gz').then((fixture) => {
        expect(file).to.deep.equal(fixture)
      })
    })
  })
})
