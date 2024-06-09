class IframePage {
  private iframeSelector: string

  constructor() {
    this.iframeSelector = '#courses-iframe' 
  }

  scrollIframeIntoView() {
    // Scroll to the iframe using the selector
    cy.get(this.iframeSelector).scrollIntoView().should('be.visible')
  }

  clickButtonInsideIframe(selector: string) {
    // Scroll the iframe into view first
    this.scrollIframeIntoView()

    // Use the selector to click a button inside the iframe after ensuring it is loaded
    cy.get(this.iframeSelector).its('//*[@id="courses-iframe"]').click
  }
}

export default IframePage
