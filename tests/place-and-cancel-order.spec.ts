const { expect, test } = require("@playwright/test");
const { LoginPage } = require("../tests/pages/login-page");
const { ProductPage } = require("../tests/pages/product-page");
const { SearchPage } = require("../tests/pages/search-page");
const { CartPage } = require("../tests/pages/cart-page");

const { email, password } = require("./credentials");


test("test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);


  await page.goto("https://www.automationexercise.com/");
  await page.screenshot({ path: "screenshot.jpg" });
  await loginPage.SignIn(email, password);
  await searchPage.searchForProduct("tshirt");
  await productPage.addToCart();
  await cartPage.selectCart();
});
