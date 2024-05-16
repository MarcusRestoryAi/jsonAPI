describe('template spec', () => {
  beforeEach(() => {
    cy.visit('index.html')
  })

  it('passes', () => {
    cy.get("#btnFetch").click();

    cy.get("#output").should("contains.text", "iss")
  })
})