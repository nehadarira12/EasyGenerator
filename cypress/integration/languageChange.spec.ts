import TaskPage from '../pages/TaskPage'
const taskPage = new TaskPage()

describe('Iframe Interaction', () => {
  beforeEach(() => {
    taskPage.visit()  })

  it('Verify that, The page should scroll to the iframe and verify its presence', () => {
    cy.get('#courses-iframe').scrollIntoView().should('be.visible')
  })
})






