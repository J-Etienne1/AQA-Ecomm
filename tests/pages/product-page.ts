exports.ProductPage = class ProductPage {
  page: any;
  addToCartButton: any;
  addedToCart: any;
  cookieModel: any;

  constructor(page) {
    this.page = page;
    this.addToCartButton = page.locator("a.add-to-cart");
    this.addedToCart = page.locator("button.close-modal");
    this.cookieModel = page.locator("//p[contains(text(),'Consent')]");
  }

  async addToCart() {
    await this.addToCartButton.first().click();
    if (await this.cookieModel.isVisible(2000)){
        await this.cookieModel.click();
      }
    await this.addedToCart.waitFor({ state: "visible", timeout: 5000 });
    await this.addedToCart.click();
  }
};
