import { By, until } from "selenium-webdriver"
import assert from "assert"

export default async function loginTest(driver) {
  await driver.findElement(By.css('[data-test="username"]')).sendKeys("standard_user")

  await driver.findElement(By.css('[data-test="password"]')).sendKeys("secret_sauce")

  await driver.findElement(By.css('[data-test="login-button"]')).click()

  const title = await driver.wait(
    until.elementLocated(By.css('[data-test="title"]')),
    10000
  )

  assert.strictEqual(await title.getText(), "Products")
}