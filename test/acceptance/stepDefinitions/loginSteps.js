const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test")
// 1
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
// 2
Given('I am on the Login page', async function () {
    await page.goto('http://localhost:3000/')
    await expect(page.getByTestId('loginComponent')).toBeVisible()
});

When('the user clicks on the link with id {string}', async function (string) {
    await page.getByTestId(string).click()
});
// 3

When('the user inputs {string} for the {string} field', async function (string, string2) {
    await page.getByTestId(string2).fill(string)
});

When('the user clicks on the {string} button', async function (string) {
    await page.getByTestId(string).click()
});

Then('the {string} component should be visible', async function (string) {
    await expect(page.getByTestId(string)).toBeVisible()
});

Then('the {string} component should contain routines or the message {string}', async function (string, string2) {
    const routine = await page.getByTestId('routineCard')
    const component = await page.getByTestId(string)
    const componentContainsText = await component.getByText(string2)
    const componentContainsRoutine = await component.getByTestId(string)
    await expect( componentContainsText || componentContainsRoutine).toBeTruthy()
});


