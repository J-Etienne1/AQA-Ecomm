exports.PaymentsPage = class PaymentsPage {
  page: any;
  NameOnCardField: any;
  CardNumberField: any;
  CvcField: any;
  ExpirationMonthField: any;
  ExpirationYearField: any;
  PayButton: any;

  constructor(page) {
    this.page = page;
    this.NameOnCardField = page.locator("input[data-qa='name-on-card']");
    this.CardNumberField = page.locator("input[data-qa='card-number']");
    this.CvcField = page.locator("input[data-qa='cvc']");
    this.ExpirationMonthField = page.locator("input[data-qa='expiry-month']");
    this.ExpirationYearField = page.locator("input[data-qa='expiry-year']");
    this.PayButton = page.locator("input[data-qa='pay-button']");
  }

  async enterCardDetails(cardDetails){
    await this.page.waitForURL("**/payment")
    await this.NameOnCardField.fill(cardDetails.nameOnCard);
    await this.CardNumberField.fill(cardDetails.cardNumber);
    await this.CvcField.fill(cardDetails.cvc);
    await this.ExpirationMonthField.fill(cardDetails.expirationMonth);
    await this.ExpirationYearField.fill(cardDetails.expirationYear);
  }

  async clickPayButton(){
    await this.PayButton.click();
  }
};
