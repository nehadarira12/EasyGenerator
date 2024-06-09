import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    setupNodeEvents(on, config) {
      // Your plugin code here
      on('task', {
        readAlertText: () => {
          const fs = require('fs')
          const path = 'path/to/alert-text.txt' // Ensure this is the correct path
          return fs.readFileSync(path, 'utf8')
        },
      })

      return config
    },
  },
})
