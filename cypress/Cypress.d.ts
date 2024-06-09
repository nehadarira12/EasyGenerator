declare namespace Cypress {
  interface Chainable<Subject = any> {
    xpath(
      selector: string,
      options?: Partial<
        Cypress.Loggable &
          Cypress.Timeoutable &
          Cypress.Withinable &
          Cypress.Shadow
      >
    ): Chainable<Subject>
  }
}
