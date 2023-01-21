const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test")

Given('I open the App the first time with the baseURL', async function () {
    await page.goto('http://localhost:3000/') // <-- Nuxt app is running and route '/' is showing.
    await expect(page.getByTestId('loginComponent')).toBeVisible()
});
Then('input {string} should be visible', async function (string) {
    await expect(page.getByTestId(string)).toBeVisible()
});
Then('button {string} should be visible', async function (string) {
    await expect(page.getByTestId(string)).toBeVisible()
});

Given('I am on the Login page', async function () {
    await page.goto('http://localhost:3000/')
    await expect(page.getByTestId('loginComponent')).toBeVisible()
});
When('the user clicks on the link for {string}', async function (string) {
    await page.getByTestId(string).click()
});


