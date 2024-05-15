describe('test screenshots', () => {
  beforeEach(() => {
    // consume lots of memory to try and get the screenshot timeout
    cy.intercept('/memory', {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html'
      },
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
      `
    })
  })

  for (let index = 0; index < 1; index++) {
    it(`test ${index + 1} passes`, () => {
      cy.viewport(1920, 1080)
      cy.visit('/memory')
      for (let i = 0; i < 100; i++) {
        cy.screenshot(`test-${index + 1}-${i + 1}`, { capture: 'viewport' })
      }
    })
  }
})
