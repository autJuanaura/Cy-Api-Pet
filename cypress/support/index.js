// ***********************************************************
// This example plugins/index.js can be used to load plugins
// you want to use with your Cypress tests.
//
// This includes common plugins that people import as well as local
// plugins this project uses.
//
// Plugins are ES6 modules so you can import them using ES6
// import syntax.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// Import the cypress-multi-reporters plugin
const multiReporters = require('cypress-multi-reporters');

// Import the cypress-multi-reporters plugin options
const reporterOptions = require('./reporterOptions');

// Export the plugin
module.exports = (on, config) => {
  // Use the cypress-multi-reporters plugin
  on('test:finished', (test) => {
    multiReporters(on, config);
  });

  // Return the updated config
  return config;
};