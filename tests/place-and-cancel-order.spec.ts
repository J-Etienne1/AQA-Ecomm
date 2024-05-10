const { test } = require("@playwright/test");
const { LoginPage } = require("../tests/pages/login-page");
const { ProductPage } = require("../tests/pages/product-page");
const { SearchPage } = require("../tests/pages/search-page");
const { CartPage } = require("../tests/pages/cart-page");
const { CheckoutPage } = require("../tests/pages/checkout-page");
const { PaymentsPage } = require("../tests/pages/payments-page");
const { OrderConfirmationPage } = require("../tests/pages/order-confirmation-page");
const { email, password } = require("./credentials");

test("test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const paymentsPage = new PaymentsPage(page);
  const orderConfirmationPage = new OrderConfirmationPage(page);

  const cardDetails = {
    nameOnCard: "Jason",
    cardNumber: "4242424242424242",
    cvc: "123",
    expirationMonth: "12",
    expirationYear: "2030"
  };

  await page.goto("https://www.automationexercise.com/");
  await page.screenshot({ path: "screenshot.jpg" });
  await loginPage.SignIn(email, password);
  await searchPage.searchForProduct("tshirt");
  await productPage.addToCart();
  await cartPage.selectCart();
  await checkoutPage.placeOrder();
  await paymentsPage.enterCardDetails(cardDetails);
  await paymentsPage.clickPayButton();
  await orderConfirmationPage.confirmOrder();
});
