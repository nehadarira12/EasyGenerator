import TaskPage from '../pages/TaskPage'

const taskPage = new TaskPage()

describe('Verify that, Open Tab Click should be working', () => {
  beforeEach(() => {
    // Visit the page before each test
    taskPage.visit()
  })

  it('should click the Open Tab button successfully', () => {
    // Click the "Open Tab" button
    taskPage.getOpenTabButton().click()
  })
})
