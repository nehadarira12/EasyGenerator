// alertTextTest.spec.js
import TaskPage from '../pages/TaskPage'

describe('Alert Text Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Verify that, It displays an alert with correct text from a file', () => {
    // Retrieve the alert text from the backend using a custom task
    cy.task('readAlertText').then((alertText) => {
      // Use the browser's window object to interact with the alert
      cy.window().then((win) => {
        // Stub the window.alert function to capture its usage and check its parameters
        cy.stub(win, 'alert').as('alertStub')

        // Trigger the alert manually with the text from the file
        win.alert(alertText)

        // Verify that the alert was called with the correct text
        cy.get('@alertStub').should('have.been.calledWith', alertText)
      })
    })
  })
})
