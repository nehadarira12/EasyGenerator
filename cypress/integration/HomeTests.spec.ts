import 'cypress-xpath'
import TaskPage from '../pages/TaskPage'

const taskPage = new TaskPage()

describe('Open Tab Tests', () => {
  beforeEach(() => {
    taskPage.visit()
  })

  it('Verify that, Home Button should open a new tab with the correct URL of EasyGenerator', () => {
    // Click the Home button which redirects to a new origin
    taskPage.clickHomeButton()
    cy.origin('https://www.easygenerator.com', () => {
      cy.url().should('include', '/en/')
    })
  })
})
