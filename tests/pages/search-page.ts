exports.SearchPage = class SearchPage {
  page: any;
  productsLink: any;
  searchField: any;
  searchButton: any;
  cookieModel: any;

  constructor(page) {
    this.page = page;
    this.productsLink = page.locator("a[href='/products']");
    this.searchField = page.locator("input#search_product");
    this.searchButton = page.locator("i.fa-search");
    this.cookieModel = page.locator("//p[contains(text(),'Consent')]");
  }

  async searchForProduct(product) {
    await this.page.waitForTimeout(2000);
    if (await this.cookieModel.isVisible(2000)){
      await this.cookieModel.click();
    }
    await this.productsLink.click();
    await this.searchField.fill(product);
    await this.searchButton.click();
  }
};
