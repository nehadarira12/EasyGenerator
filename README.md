# Cypress Website Testing Framework

---

## Project Overview

This project includes automated tests for the Practice Page Website. It leverages Cypress for end-to-end testing to ensure that all functionalities work as expected.

## Features Tested

- **Alerts and Modals**: Verifying correct functioning of alert and confirmation dialogs.
- **Form Interactions**: Input fields, dropdowns, and button interactions.
- **Iframe Interactions**: Iframe navigation.
- **Navigation**: Testing page navigations and link correctness.
- **Hover Actions**: Testing UI changes on mouse hover.

## Cypress Tests

I have created several spec files to cover different aspects of the application. Below is a list of the spec files and their purposes:

- **alertConfirmTests.spec.ts**: Tests alert and confirmation modals for correct text and user interaction.
- **dropdownTests.spec.ts**: Verifies that dropdowns populate correctly and can be interacted with.
- **HomeTests.spec.ts**: Ensures that the Home button redirects to the correct landing page.
- **HoverTest.spec.ts**: Tests that hover elements display additional options or information.
- **iframeTests.spec.ts**: Handles tests that interact with elements inside iframes.
- **ImageUpload.spec.ts**: Tests the file upload functionality, verifying that files can be uploaded and are visible after upload.
- **LanguageChange.spec.ts**: Tests the ability to change the language of the application through UI elements.
- **OpenTabTests.spec.ts**: Ensures that clicking the 'Open Tab' button opens a new browser tab with the correct URL.
- **ShowHideTest.spec.ts**: Tests functionality for showing and hiding elements on the page.

## Setup and Installation

To get started with this project, follow these steps:

1. **Clone the Repository**
    ```sh
    git clone https://github.com/nehadarira12/EasyGenerator
    ```
2. **Install Dependencies**
    ```sh
    npm install
    ```
3. **Run Tests**
    ```sh
    npm run test
    ```

## Running Tests

You can run the tests through the Cypress Test Runner or via the command line:

- **Open Cypress Test Runner**:
    ```sh
    npm run open
    ```
- **Run Tests Headlessly**:
    ```sh
    npm run run
    ```

## Reporting

This project uses Mochawesome for generating beautiful and insightful test reports. Reports can be found in the `cypress/reports` directory after test execution.

