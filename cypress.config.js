const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2",
    envFile: 'cypress.env.json', // Add this line to specify the env file
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});