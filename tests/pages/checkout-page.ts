exports.CheckoutPage = class CheckoutPage {
  page: any;
  placeOrderButton: any;

  constructor(page) {
    this.page = page;
    this.placeOrderButton = page.locator("a[href='/payment']");
  }


  async placeOrder() {
    await this.page.waitForURL("**/checkout");
    await this.placeOrderButton.click();
  }
};
