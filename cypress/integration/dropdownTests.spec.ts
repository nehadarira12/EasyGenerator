import 'cypress-xpath'
import TaskPage from '../pages/TaskPage'

const taskPage = new TaskPage()

describe('Dropdown Tests for Practice Page', () => {
  beforeEach(() => {
    taskPage.visit()
  })

  it('Verify that, It should select Option1 from the dropdown', () => {
    taskPage.selectDropdownOption('option1')
    taskPage.getDropdown().should('have.value', 'option1')
  })

  it('Verify that, It should select Option2 from the dropdown', () => {
    taskPage.selectDropdownOption('option2')
    taskPage.getDropdown().should('have.value', 'option2')
  })

  it('Verify that, It should select Option3 from the dropdown', () => {
    taskPage.selectDropdownOption('option3')
    taskPage.getDropdown().should('have.value', 'option3')
  })
})
