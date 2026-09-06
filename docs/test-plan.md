# Swag Labs - QA Test Plan

**Website:** [https://www.saucedemo.com/](https://www.saucedemo.com/)  
**Application:** Swag Labs E-commerce Website  
**Testing Type:** Manual Exploratory + Functional Testing  
**Automation:** Selenium WebDriver with JavaScript  
**Prepared by:** Nand Kishor Gorain  
**Date:** 5-Sept.-2026

---

## 1. Test Objective

The objective of this test plan is to check the core functionality, usability, reliability, and error handling of the Swag Labs e-commerce application.

This testing focused on all the user action including but not limited to user authentication, cart management, checkout. More exploratory testing will be performend using different provided user accounts by the application to identify user specific bugs and unexpected behaviors.

---

## 2. Scope

### In Scope

The following areas will be tested:

* User login and authentication
* Login error handling
* Product inventory and browsing
* Product details
* Product sorting
* Product images, names, descriptions, and prices
* Add to Cart functionality
* Remove from Cart functionality
* Cart contents and item count
* Checkout information form
* Checkout validation
* Checkout overview and price calculations
* Order completion
* Browser navigation behavior
* User-specific application behavior
* Basic UI and visual consistency
* Performance behavior for the performance-oriented user account



## 3. Testing Types

### Functional Testing

Verify that the features of the application works as expected.

Examples:

* Users can log in with valid credentials
* Products can be added to and removed from the cart
* Checkout can be completed with valid information
* Locked-out users receive an appropriate error message

### Negative Testing

Verify that the application handles invalid actions and invalid input correctly.

Examples:

* Attempting to log in with a locked-out account
* Submitting checkout information with missing fields
* Attempting to proceed through checkout with an invalid input
* Attempting to perform actions that should not be available

### UI Testing

Verify that the user interface displays information and controls correctly.

Areas include:

* Product names and descriptions
* Product images
* Prices
* Buttons and controls
* Form fields
* Error messages
* Page layouts
* Consistency between related pages

### Exploratory Testing

Perform unscripted testing to identify unexpected behavior that may not be covered by predefined test cases.

Particular attention will be given to:

* Different user accounts
* Product-to-product interactions
* Browser navigation
* Direct URL navigation
* Repeated actions
* Boundary conditions
* State changes between pages

### Edge Case Testing

Test unusual but valid or potentially problematic scenarios.

Examples:

* Checkout with an empty cart
* Direct navigation to checkout pages
* Repeated Add/Remove actions
* Browser Back and Forward navigation
* Products with unexpected or invalid data
* Form fields containing multiple characters

### Cross-Browser Testing

The application should be checked on commonly used browsers to identify browser-specific UI or functional issues.

Primary browser:

* Google Chrome

Additional consideration:

* Microsoft Edge
* Mozilla Firefox

Cross-browser testing will focus on login, product browsing, cart, checkout, navigation, and major UI behavior.

---

## 4. Test Environment

### Desktop

| Component           | Configuration                |
| ------------------- | ---------------------------- |
| Operating System    | Windows 10/11, android 15               |
| Primary Browser     | Google Chrome                |
| Secondary Browser   | Microsoft Edge               |
| Additional Browser  | Mozilla Firefox              |
| Automation          | Selenium WebDriver           |
| Automation Language | JavaScript                   |
| Test Framework      | Mocha                        |
| Network             | Standard internet connection |

### Devices

Primary testing will be performed on a desktop browser.

Responsive behavior may also be checked using browser developer tools at common mobile viewport sizes.

---

## 5. Test Data

The credentials supplied by the application will be used during testing.

| Username                  | Password       | Purpose                        |
| ------------------------- | -------------- | ------------------------------ |
| `standard_user`           | `secret_sauce` | Normal application behavior    |
| `locked_out_user`         | `secret_sauce` | Login error handling           |
| `problem_user`            | `secret_sauce` | Application defect exploration |
| `performance_glitch_user` | `secret_sauce` | Performance behavior testing   |
|`error_user` | `secret_sauce` | Error testing |
| `visual_user` | `secret_sauce` | Visual testing

Additional checkout test data:

| Field       | Test Value |
| ----------- | ---------- |
| First Name  | Test       |
| Last Name   | User       |
| Postal Code | 826001     |

---

# 6. Test Cases

## TC-001 : Successful Login

**Objective:** Verify that a valid user can log in successfully.

**Precondition:** User is on the login page.

### Steps

1. Enter `standard_user` in the username field.
2. Enter `secret_sauce` in the password field.
3. Click **Login**.

### Expected Result

The user should be authenticated successfully and redirected to the Inventory page.

---

## TC-002 : Locked-Out User Login

**Objective:** Verify that a locked-out user cannot access the application.

**Precondition:** User is on the login page.

### Steps

1. Enter `locked_out_user` as the username.
2. Enter `secret_sauce` as the password.
3. Click **Login**.

### Expected Result

Login should be rejected and an appropriate error message should be displayed.

---

## TC-003 : Add Product to Cart

**Objective:** Verify that a user can add an available product to the cart.

**Precondition:** User is logged in as `standard_user`.

### Steps

1. Open the Inventory page.
2. Select an available product.
3. Click **Add to Cart**.
4. Open the Cart.

### Expected Result

The selected product should appear in the cart and the cart item count should be updated.

---

## TC-004 : Remove Product from Cart

**Objective:** Verify that a user can remove an item from the cart.

**Precondition:** User is logged in and has at least one product in the cart.

### Steps

1. Open the Cart.
2. Select a product.
3. Click **Remove**.

### Expected Result

The selected product should be removed from the cart and the cart count should be updated accordingly.

---

## TC-005 : Complete Checkout

**Objective:** Verify that a user can successfully complete an order.

**Precondition:** User is logged in and has at least one product in the cart.

### Steps

1. Open the Cart.
2. Click **Checkout**.
3. Enter a valid first name.
4. Enter a valid last name.
5. Enter a valid postal code.
6. Click **Continue**.
7. Review the order.
8. Click **Finish**.

### Expected Result

The order should be completed successfully and the order confirmation page should be displayed.

---

## TC-006 : Checkout Form Validation

**Objective:** Verify that checkout form validation works correctly.

**Precondition:** User is logged in and has a product in the cart.

### Steps

1. Navigate to Checkout.
2. Leave one or more required fields empty.
3. Click **Continue**.
4. Observe the validation messages.

### Expected Result

The application should identify the specific missing or invalid field and display an appropriate validation message.

---

## TC-007 : Product Information Consistency

**Objective:** Verify that product information remains consistent across the application.

**Precondition:** User is logged in.

### Steps

1. Open the Inventory page.
2. Record a product's name, description, and price.
3. Open the corresponding Product Details page.
4. Compare the displayed information.

### Expected Result

The product name, description, and price should match across both pages.

---

## TC-008 : Cart Price Calculation

**Objective:** Verify that checkout prices are calculated correctly.

**Precondition:** User is logged in and has one or more products in the cart.

### Steps

1. Add one or more products to the cart.
2. Open the Cart.
3. Proceed to checkout.
4. Review the Checkout Overview.
5. Compare item prices, subtotal, tax, and total.

### Expected Result

All displayed prices and totals should accurately reflect the products in the cart.

---

## 7. Risk Assessment

| Risk Area          | Risk                                                             | Impact                                                | Priority |
| ------------------ | ---------------------------------------------------------------- | ----------------------------------------------------- | -------- |
| Authentication     | Login behavior may differ between user accounts                  | Users may be incorrectly denied or granted access     | High     |
| Product Catalog    | Incorrect product data or broken product interactions            | Users may select or purchase incorrect products       | High     |
| Cart Management    | Add/Remove actions may modify incorrect items                    | Incorrect cart contents and orders                    | High     |
| Checkout           | Validation or navigation errors may prevent purchases            | Direct loss of completed orders                       | High     |
| Price Calculation  | Incorrect totals may be displayed                                | Users may receive incorrect order amounts             | High     |
| Browser Navigation | Back/Forward navigation may produce unexpected application state | Users may lose their session or reach incorrect pages | Medium   |
| UI                 | Broken layouts or inconsistent information                       | Reduced usability and user confidence                 | Medium   |
| Performance        | Slow inventory loading may affect user experience                | Increased abandonment and poor usability              | Medium   |

### Highest-Risk Areas

The highest-risk areas identified during exploratory testing are:

1. **Cart and product state management**
2. **Checkout workflow**
3. **Product data consistency**
4. **Price calculations**
5. **User-specific application behavior**

These areas directly affect whether users can correctly select products and complete purchases.

---

## 8. Entry Criteria

Testing can begin when:

* The application is accessible.
* Valid test credentials are available.
* Required browsers are installed.
* Selenium automation environment is configured.
* The application can be accessed through the test URL.

---

## 9. Exit Criteria

Testing can be considered complete when:

* Core login scenarios have been tested.
* Product browsing and product interactions have been tested.
* Cart functionality has been tested.
* Checkout functionality has been tested.
* Negative and edge cases have been explored.
* Significant defects have been documented with reproduction steps.
* Required automated test scenarios have been executed successfully.

---

## 10. Test Execution Summary

Manual exploratory testing was performed across the supplied user accounts, with additional focus on `problem_user`, `error_user`, and `performance_glitch_user` to identify account-specific behavior.

Multiple functional, UI, negative, and edge-case scenarios were explored. Several distinct defects were identified and documented separately in the bug report.

The required automated regression flows were implemented using **Selenium WebDriver with JavaScript and Mocha**:

* Successful login using `standard_user`
* Product purchase and checkout using `standard_user`
* Locked-out login validation using `locked_out_user`

The automated test suite successfully executes all three required scenarios.

---

**End of Test Plan**
