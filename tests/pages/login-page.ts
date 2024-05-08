exports.LoginPage = class LoginPage {
  page: any;
  SignupLoginInButton: any;
  loginInButton: any;
  emailInput: any;
  passwordInput: any;
  cookieModel: any

  constructor(page) {
    this.page = page;
    this.SignupLoginInButton = page.locator("a[href='/login']");
    this.emailInput = page.locator("input[data-qa='login-email']");
    this.passwordInput = page.locator("input[data-qa='login-password']");
    this.loginInButton = page.locator("//button[contains(text(),'Login')]");
    this.cookieModel = page.locator("//p[contains(text(),'Consent')]");

  }

  async SignIn(email, password) {
    await this.page.waitForTimeout(2000);
    if (await this.cookieModel.isVisible(2000)){
      await this.cookieModel.click();
    }
    await this.SignupLoginInButton.click();
    await this.page.waitForURL("**/login")
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.page.waitForTimeout(2000);
    await this.loginInButton.click();
  }
};
