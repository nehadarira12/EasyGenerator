import 'cypress-xpath'
import TaskPage from '../pages/TaskPage'

const taskPage = new TaskPage()

describe('Hover Tests', () => {
  // Visit the task page before each test
  beforeEach(() => {
    taskPage.visit()
  })

  it('should display options upon hovering over the button', () => {
    // Hover over the button
    taskPage.getHoverButton().trigger('mouseover')

    // Add a wait to ensure the hover effect has time to display the options
    cy.wait(1000)

    // Verify the hover options are visible
    taskPage.getHoverOptions().should('be.visible')

    // Verify the text of the hover options
    taskPage.getHoverOptions().eq(0).should('have.text', 'Top')
    taskPage.getHoverOptions().eq(1).should('have.text', 'Reload')
  })
})
