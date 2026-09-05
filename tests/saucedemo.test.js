import { Builder } from "selenium-webdriver"
import loginTest from "./login.js"
import checkoutTest from "./checkout.js"
import lockedUserTest from "./locked-user.js"

const BASE_URL = "https://www.saucedemo.com/"

describe("SauceDemo", function () {
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

  it("should allow a standard user to log in successfully", async function () {
    await loginTest(driver)
  })

  it("should allow a user to complete a purchase", async function () {
    await checkoutTest(driver)
  })

  it("should show an error for a locked out user", async function () {
    await lockedUserTest(driver)
  })
})