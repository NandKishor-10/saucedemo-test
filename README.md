# SauceDemo QA Automation

Selenium WebDriver automation tests for [SauceDemo](https://www.saucedemo.com/) using JavaScript and Mocha.

## Requirements

- Node.js
- Google Chrome

## Installation

Clone the repository and install the dependencies:

```
npm install
````

## Run Tests

Run the complete test suite:

```
npm test
```

The tests will automatically open Chrome, execute the test cases, and close the browser after each test.

## Automated Tests

The test suite covers:

* Valid login with `standard_user`
* Add product and complete checkout
* Locked-out login with `locked_out_user`

## Project Structure

```
tests/
├── login.js
├── checkout.js
├── locked-user.js
└── saucedemo.test.js

docs/
├── test-plan.md
└── bug-report.pdf
```