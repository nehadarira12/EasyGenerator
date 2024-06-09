import { defineConfig } from 'cypress'
require('cypress-mochawesome-reporter/plugin')
const fs = require('fs')
const path = require('path')

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    specPattern: 'cypress/integration/**/*.spec.ts',
    video: false,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      charts: true,
      reportPageTitle: 'Test Report',
      embeddedScreenshots: true,
      inlineAssets: true,
    },
    env: {
      alertText: 'Hello {name}, Are you sure you want to confirm?', // Consider replacing {name} dynamically in tests if needed
      customText: "Neha Darira's text for easygenerator",
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)

      on('task', {
        readAlertText: () => {
          // Make sure the path is correctly set up for your environment
          const filePath = path.join(
            'C:',
            'Users',
            'neha_rayn',
            'Desktop',
            'EasyGenerator',
            'alert-text.txt'
          )
          return fs.readFileSync(filePath, 'utf8')
        },
      })

      return config
    },
  },
})
