import TaskPage from '../pages/TaskPage'
const taskPage = new TaskPage();

describe('Alert/Confirmation Modal Tests', () => {

  beforeEach(() => {

    taskPage.visit()

  })

  it('Verify that, It should trigger a confirm dialog with the correct text', () => {
    const name = 'Neha Darira'
    const alertText = Cypress.env('alertText').replace('{name}', name)

    // Type the name and trigger the confirm dialog
    cy.get('input#name').clear().type(name)
    cy.window().then((win) => {
      const confirmStub = cy.stub(win, 'confirm').returns(true)
      cy.wrap(confirmStub).as('confirmStub')
    })
    cy.get('#confirmbtn').click()

    // Check the confirm dialog was triggered with the correct text
    cy.get('@confirmStub').should('have.been.calledWith', alertText)
  })
})
