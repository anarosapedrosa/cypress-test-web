const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "jp6mza",
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
