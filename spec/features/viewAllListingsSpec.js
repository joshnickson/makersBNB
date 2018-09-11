'use strict'

const Browser = require('zombie');

Browser.localhost('localhost', 3000)

describe('View all listings features', function() {

  // beforeEach(function () {
    const browser = new Browser()
  // })

  describe('/', function() {
    it('gets there and responds', function () {
      browser.visit('/', function() {
        console.log(browser.location.href)
        browser.assert.success();
      })
    })
    it('displays Welcome to MakersBNB', function() {
      browser.visit('/', function() {
        browser.assert.text('Welcome to MakersBNB');
      })
    })
    it('has a SEARCH button', function() {
      browser.visit('/', function() {
        browser.assert.button('Search')
      })
    })
    it('clicking Search button takes user to /homepage', function() {
      browser.visit('/', function() {
      browser.pressButton('Search!', done);
      browser.assert.success();
      })
    })
  })

  describe('/homepage', function() {
    it('displays a listed property', function() {
      browser.visit('/homepage', function () {
      browser.assert.text('London');
      })
    })
  })

  describe('/homepage', function() {
    it('clicking Add Listing button takes user to /homepage/add')
  })


});
