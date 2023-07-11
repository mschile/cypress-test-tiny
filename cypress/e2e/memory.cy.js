describe('memory spec', { browser: { family: 'chromium' } }, () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3500/memory', {
      statusCode: 200,
      body: `
        <html>
          <body></body>
          <script>
            for (let i = 0; i < 100; i++) {
              const el = document.createElement('p')
              el.id = 'p' + i
              el.innerHTML = 'x'.repeat(100000)

              document.body.appendChild(el)
            }
          </script>
        </html>
      `,
      headers: {
        'content-type': 'text/html'
      }
    })
  })

  for (let index = 0; index < 50; index++) {
    it(`test ${index + 1} passes`, () => {
      cy.visit('http://localhost:3500/memory')
    })
  }
})
