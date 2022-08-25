const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "6by2m6",
  video:false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth:1440,
    viewportHeight:900,
    baseUrl:'https://demo.realworld.io'
  },
});
