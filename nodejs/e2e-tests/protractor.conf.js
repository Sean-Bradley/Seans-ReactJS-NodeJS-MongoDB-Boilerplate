let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://192.168.99.100/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 5000,
    isVerbose: true,
    showColors: true,
    print: function () { }
  },

  onPrepare: function () {
    browser.ignoreSynchronization = true;
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      },
      summary: {
        displayDuration: false
      }
    }));
  },



};
