import 'cypress-xpath'
import TaskPage from '../pages/TaskPage'

const taskPage = new TaskPage()

describe('Show/Hide Textbox Tests', () => {
  // Visit the task page before each test
  beforeEach(() => {
    taskPage.visit()
  })

  it('should enter text and hide the textbox', () => {
    const textToType = Cypress.env('customText') // Get the text from environment variables
    // Enter text in the displayed text field
    taskPage.typeDisplayedText(textToType)

    // Verify the text is entered correctly
    taskPage.getDisplayedTextField().should('have.value', textToType)

    // Click the hide button
    taskPage.clickHideButton()

    // Verify the textbox is hidden
    taskPage.getDisplayedTextField().should('not.be.visible')
  })

  it('should show the textbox and verify the text', () => {
    const textToType = Cypress.env('customText') // Get the text from environment variables
    // Enter text in the displayed text field
    taskPage.typeDisplayedText(textToType)

    // Verify the text is entered correctly
    taskPage.getDisplayedTextField().should('have.value', textToType)

    // Click the hide button
    taskPage.clickHideButton()

    // Verify the textbox is hidden
    taskPage.getDisplayedTextField().should('not.be.visible')

    // Click the show button
    taskPage.clickShowButton()

    // Verify the textbox is visible
    taskPage.getDisplayedTextField().should('be.visible')

    // Verify the text in the textbox
    taskPage.getDisplayedTextField().should('have.value', textToType)
  })
})
