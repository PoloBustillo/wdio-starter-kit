class HomePage {
  // Replace these selectors
  get signInLink () { return $('//a[contains(text(),"Sign in")]'); }
  get manageAccountsFooterLink() { return $('h4*=Store')}


  clickSignInButton () {
    this.signInLink.click();
  }

  scrollToFooter() {
    console.log(this.manageAccountsFooterLink.getText());
    browser.scroll(0, 8150);
  }

}

module.exports = HomePage;