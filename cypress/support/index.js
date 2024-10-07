// ***********************************************************
// This example support/index.js can be used to load reporters
// you want to use with your Cypress tests.
//
// This includes common reporters that people import as well as local
// reporters this project uses.
//
// Reporters are ES6 modules so you can import them using ES6
// import syntax.
//
// You can read more here:
// https://on.cypress.io/reporters-guide
// ***********************************************************

// Import the mochawesome reporter
const mochawesome = require('@cypress/mochawesome');

// Import the cypress-junit reporter
const junit = require('cypress-junit');

// Add the mochawesome reporter
addReporter('mochawesome', mochawesome);

// Add the junit reporter
addReporter('junit', junit);

// Export the reporters
module.exports = {};