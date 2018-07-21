const Login = require('../pages/login.page.js');
const HomePage = require('../pages/home.page.js');
const chai = require('chai');
const chaiWebdriver = require('chai-webdriverio').default;
const login = new Login();
const home_page = new HomePage();

describe('Login Page', function () {

  // Replace with valid email address & password
  const validEmail = 'valid@email.com';
  const validPass = 'asdasd';

  before(function() {
    // Replace URL with correct login page
      browser.url('./');
      home_page.scrollToFooter();
      home_page.clickSignInButton();
      chai.use(chaiWebdriver(browser));

  });

  it('should let you login with valid credentials', function () {
    login.login(validEmail, validPass);
    expect("#lol").not.to.be.there()
    expect(login.isLoggedIn()).to.be.false;
  });

  it('should error on a missing email', function () {
    login.login('', validPass);

    expect(login.isLoggedIn()).to.be.false;
  });

  it('should error on a invalid email', function () {
    login.login('invalid', validPass);

    expect(login.isLoggedIn()).to.be.false;
  });

  it('should error on missing password', function () {
    login.login(validEmail, '');

    expect(login.isLoggedIn()).to.be.false;

  });

})