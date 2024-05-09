exports.PaymentsPage = class PaymentsPage {
    page: any;
    NameOnCardField: any;
    CardNumberField: any;
    CvcField: any;
    ExpirationMonthField: any;
    ExpirationYearField: any;
    PayButton: any;

    constructor(page){
        this.page = page
        this.NameOnCardField = page.locator("");
        this.CardNumberField = page.locator("");
        this.CvcField = page.locator("");
        this.ExpirationMonthField = page.locator("");
        this.ExpirationYearField = page.locator("");
        this.PayButton = page.locator("");

    }
}