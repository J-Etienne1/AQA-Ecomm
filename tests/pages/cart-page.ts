exports.CartPage = class CartPage {
    page: any;
    cartButton: any;    
  
    constructor(page) {
      this.page = page;
      this.cartButton = page.locator("a[href='/products']");
      
    }
  
    async selectCart() {
        await this.cartButton.click();
        await this.page.waitForURL("**/view_cart")
      
    }
  };