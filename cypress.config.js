const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2",
    envFile: 'cypress.env.json',
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'mochawesome, junit',
      mochawesomeReporterOptions: {
        reportDir: 'cypress/reports',
        overwrite: true,
        html: true,
        json: true,
      },
      junitReporterOptions: {
        mochaFile: 'cypress/reports/results.xml',
      },
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});