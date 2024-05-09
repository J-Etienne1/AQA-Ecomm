exports.CartPage = class CartPage {
  page: any;
  cartButton: any;
  checkoutButton: any;

  constructor(page) {
    this.page = page;
    this.cartButton = page.locator(
      "//a[contains(text(),'Cart')]/i[contains(@class, 'fa-shopping-cart')]"
    );
    this.checkoutButton = page.locator("a[href='/view_cart']");
  }

  async selectCart() {
    await this.cartButton.click();
    await this.page.waitForTimeout(2000);
    await this.page.waitForURL("**/view_cart");
    await this.checkoutButton.click();
  }
};
