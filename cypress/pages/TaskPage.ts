class TaskPage {
  // Navigates to the specified URL for the task page
  visit() {
    cy.visit('http://localhost:8080/task.html')
  }

  // Retrieves the dropdown element by its ID
  getDropdown() {
    return cy.get('select#dropdown-class-example')
  }

  // Selects an option in the dropdown by the option value
  selectDropdownOption(option: string) {
    this.getDropdown().select(option)
  }

  // Retrieves the input field for entering names by its ID
  getNameInputField() {
    return cy.get('input#name')
  }

  // Types a specified name into the name input field
  typeName(name: string) {
    this.getNameInputField().clear().type(name)
  }

  // Retrieves the confirm button by its ID
  getConfirmButton() {
    return cy.get('#confirmbtn')
  }

  // Simulates a click on the confirm button
  triggerConfirm() {
    this.getConfirmButton().click()
  }

  // Retrieves the "Open Tab" button by its ID
  getOpenTabButton() {
    return cy.get('#opentab')
  }

  // Clicks the "Open Tab" button and removes the 'target' attribute to stay in the same tab
  clickOpenTab() {
    this.getOpenTabButton().invoke('removeAttr', 'target').click()
  }

  // Retrieves the hover button within a hover container by its class
  getHoverButton() {
    return cy.get('.hover-container .hover-btn')
  }

  // Retrieves all clickable options that appear upon hovering
  getHoverOptions() {
    return cy.get('.hover-container .hover-content a')
  }

  // Retrieves the text input field used for show/hide text demonstrations
  getDisplayedTextField() {
    return cy.get('input#displayed-text')
  }

  // Types text into the display text field
  typeDisplayedText(text: string) {
    this.getDisplayedTextField().clear().type(text)
  }

  // Retrieves the hide button by its ID
  getHideButton() {
    return cy.get('#hide-textbox')
  }

  // Clicks the hide button to hide the text input field
  clickHideButton() {
    this.getHideButton().click()
  }

  // Retrieves the show button by its ID
  getShowButton() {
    return cy.get('#show-textbox')
  }

  // Clicks the show button to reveal the text input field
  clickShowButton() {
    this.getShowButton().click()
  }

  // Retrieves the file input element by its 'name' attribute
  getFileInput() {
    return cy.get('input[type="file"][name="img"]')
  }

  // // Uploads a file to the file input
  // uploadFile(fileName: string) {
  //   this.getFileInput().attachFile(fileName) // Assumes 'cypress-file-upload' is installed
  // }

  getHomeButton() {
    return cy.get('.btn.btn-primary:contains("Home")')
  }

  // Click the Home button
  clickHomeButton() {
    this.getHomeButton().click()
  }
}

export default TaskPage
