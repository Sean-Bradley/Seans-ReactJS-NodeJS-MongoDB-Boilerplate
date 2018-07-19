'use strict';

describe('Home', function () {

  beforeEach(function () {
    browser.get('');
  });

  it('should render home page when url contains no path', function () {
    expect(element.all(by.tagName('h1'))
      .first()
      .getText()).
      toMatch(/seans reactjs nodejs mongodb boilerplate/);
  });
});

describe('Cats', function () {

  //beforeEach(function () {
  browser.get('/');
  //});

  it('should click the Cats link', function () {
    var link = $('[href*=Cats]');
    link.click()
  })

  it('should now render "Cats" in h1 after link clicked', function () {
    expect(element.all(by.tagName('h1'))
      .first()
      .getText()).
      toMatch(/Cats/);
  })

  it('"Add Cats" button should be disabled by default', function () {
    expect(element(by.buttonText('Add Cat')).getAttribute('disabled')).toEqual('true');
  });

  it('should click the Dogs link', function () {
    var link = $('[href*=Dogs]');
    link.click()
  })

  it('should now render "Dogs" in h1 after link clicked', function () {
    expect(element.all(by.tagName('h1'))
      .first()
      .getText()).
      toMatch(/Dogs/);
  })

  it('should click the Birds link', function () {
    var link = $('[href*=Birds]');
    link.click()
  })

  it('should now render "Birds" in h1 after link clicked', function () {
    expect(element.all(by.tagName('h1'))
      .first()
      .getText()).
      toMatch(/Birds/);
  })
})



  //  it('should render cats when user navigates to #!/cats', function () {
  //    expect(element.all(by.tagName('h1'))
  //      .first()
  //      .getText()).
  //      toMatch(/Cats/);
  //    //browser.driver.sleep(5000);
  //  });

//   it('"add cats" button should be disabled by default', function () {
//     expect(element(by.buttonText('Add Cat')).getAttribute('disabled')).toEqual('true');
//     //browser.driver.sleep(5000);
//   });

//   it('"add cats" button should be enabled when text is added to "catName" input', function () {
//     element(by.model('catName')).sendKeys('testcat');    
//     expect(element(by.buttonText('Add Cat')).getAttribute('disabled')).toEqual(null);
//     //browser.driver.sleep(5000);
//   });
// });

// describe('Dogs', function () {

//   beforeEach(function () {
//     browser.get('/dogs');
//   });

//   it('should render Dogs when user navigates to #!/Dogs', function () {
//     expect(element.all(by.tagName('h1'))
//       .first()
//       .getText()).
//       toMatch(/Dogs/);
//   });
// });

// describe('Birds', function () {

//   beforeEach(function () {
//     browser.get('/birds');
//   });

//   it('should render Birds when user navigates to #!/Birds', function () {
//     expect(element.all(by.tagName('h1'))
//       .first()
//       .getText()).
//       toMatch(/Birds/);
//   });

// });

