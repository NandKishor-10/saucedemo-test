import { By, until } from "selenium-webdriver"
import assert from "assert"

export default async function checkoutTest(driver) {
  await driver.findElement(By.css('[data-test="username"]')).sendKeys("standard_user")

  await driver.findElement(By.css('[data-test="password"]')).sendKeys("secret_sauce")

  await driver.findElement(By.css('[data-test="login-button"]')).click()

  const addToCart = await driver.wait(
    until.elementLocated(By.css('[data-test="add-to-cart-sauce-labs-backpack"]')),
    10000
  )

  await addToCart.click()

  await driver.findElement(By.css('[data-test="shopping-cart-link"]')).click()

  const product = await driver.wait(
    until.elementLocated(By.css('[data-test="inventory-item-name"]')),
    10000
  )

  assert.strictEqual(
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
    until.elementLocated(By.css('[data-test="complete-header"]')),
    10000
  )

  assert.strictEqual(
    await confirmation.getText(),
    "Thank you for your order!"
  )
}