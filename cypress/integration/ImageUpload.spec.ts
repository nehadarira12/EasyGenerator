import TaskPage from '../pages/TaskPage'

const taskPage = new TaskPage()

describe('Image Upload Tests', () => {
  beforeEach(() => {
    // Visit the task page before each test
    taskPage.visit();
  })

  it('successfully uploads an image', () => {
    const fileName = 'test.png' // Ensure this file is in 'cypress/fixtures/'

 
    cy.get('.upload-success-message').should(
      'contain',
      'File uploaded successfully'
    )

   
    cy.get('.image-preview').should('be.visible')
    cy.get('.image-preview')
      .should('have.attr', 'src')
      .should('include', fileName)
  })
})
