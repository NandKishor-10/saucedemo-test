import { Builder, By, until } from "selenium-webdriver"
import { strictEqual } from "assert"

const BASE_URL = "https://www.saucedemo.com/"
const PASSWORD = "secret_sauce"

describe("SauceDemo - Authentication", function () {
  this.timeout(30000)

  let driver

  beforeEach(async function () {
    driver = await new Builder()
      .forBrowser("chrome")
      .build()

    await driver.get(BASE_URL)
  })

  afterEach(async function () {
    if (driver) {
      await driver.quit()
    }
  })


  // Login with valid credentials

  it("Login with valid credentials", async function () {
    const usernameInput = await driver.wait(
      until.elementLocated(By.css('[data-test="username"]')),
      10000
    )

    const passwordInput = await driver.findElement(
      By.css('[data-test="password"]')
    )

    const loginButton = await driver.findElement(
      By.css('[data-test="login-button"]')
    )

    await usernameInput.sendKeys("standard_user")
    await passwordInput.sendKeys(PASSWORD)
    await loginButton.click()

    const inventoryTitle = await driver.wait(
      until.elementLocated(By.css('[data-test="title"]')),
      10000
    )

    const title = await inventoryTitle.getText()

    strictEqual(title, "Products")
  })


  // Add item to cart and complete checkout

  it("Add item to cart and complete checkout", async function () {
    await driver.findElement(By.css('[data-test="username"]')).sendKeys("standard_user")

    await driver.findElement(By.css('[data-test="password"]')).sendKeys(PASSWORD)

    await driver.findElement(By.css('[data-test="login-button"]')).click()

    const addToCart = await driver.wait(
      until.elementLocated(
        By.css('[data-test="add-to-cart-sauce-labs-backpack"]')
      ),
      10000
    )

    await addToCart.click()

    await driver.findElement(By.css('[data-test="shopping-cart-link"]')).click()

    const product = await driver.wait(
      until.elementLocated(
        By.css('[data-test="inventory-item-name"]')
      ),
      10000
    )

    strictEqual(
      await product.getText(),
      "Sauce Labs Backpack"
    )

    await driver.findElement(By.css('[data-test="checkout"]')).click()

    await driver.findElement(By.css('[data-test="firstName"]')).sendKeys("Test")

    await driver.findElement(By.css('[data-test="lastName"]')).sendKeys("User")

    await driver.findElement(By.css('[data-test="postalCode"]')).sendKeys("826001")

    await driver.findElement(By.css('[data-test="continue"]')).click()

    await driver.wait(
      until.elementLocated(By.css('[data-test="finish"]')),
      10000
    )

    await driver.findElement(By.css('[data-test="finish"]')).click()

    const confirmation = await driver.wait(
      until.elementLocated(
        By.css('[data-test="complete-header"]')
      ),
      10000
    )

    strictEqual(
      await confirmation.getText(),
      "Thank you for your order!"
    )
  })


  // Login with locked-out user to verify error message

  it("Login with locked-out user to verify error message", async function () {
    await driver.findElement(By.css('[data-test="username"]')).sendKeys("locked_out_user")

    await driver.findElement(By.css('[data-test="password"]')).sendKeys(PASSWORD)

    await driver.findElement(By.css('[data-test="login-button"]')).click()

    const error = await driver.wait(
      until.elementLocated(By.css('[data-test="error"]')),
      10000
    )

    strictEqual(
      await error.getText(),
      "Epic sadface: Sorry, this user has been locked out."
    )
  })
})