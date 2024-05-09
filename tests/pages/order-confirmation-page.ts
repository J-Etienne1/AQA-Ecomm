exports.OrderConfirmationPage = class OrderConfirmationPage {
    page: any;
    orderConfirmationHeader: any;


    constructor(page) {
        this.page = page
        this.orderConfirmationHeader = page.locator("h2[data-qa='order-placed']")
    }

    async confirmOrder() {
        await this.page.waitForURL("**/payment_done/**")
        await expect(this.orderConfirmationHeader).toBeVisible({ timeout: 20000 })
    }
}