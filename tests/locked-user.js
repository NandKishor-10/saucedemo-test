import { By, until } from "selenium-webdriver"
import assert from "assert"

export default async function lockedUserTest(driver) {
  await driver.findElement(By.css('[data-test="username"]')).sendKeys("locked_out_user")

  await driver.findElement(By.css('[data-test="password"]')).sendKeys("secret_sauce")

  await driver.findElement(By.css('[data-test="login-button"]')).click()

  const error = await driver.wait(
    until.elementLocated(By.css('[data-test="error"]')),
    10000
  )

  assert.strictEqual(
    await error.getText(),
    "Epic sadface: Sorry, this user has been locked out."
  )
}