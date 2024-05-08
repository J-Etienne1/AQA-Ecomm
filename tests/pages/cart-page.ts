exports.CartPage = class CartPage {
  page: any;
  cartButton: any;

  constructor(page) {
    this.page = page;
    this.cartButton = page.locator(
      "//a[contains(text(),'Cart')]/i[contains(@class, 'fa-shopping-cart')]"
    );
  }

  async selectCart() {
    await this.cartButton.click();
    await this.page.waitForTimeout(2000);
    await this.page.waitForURL("**/view_cart");
  }
};
