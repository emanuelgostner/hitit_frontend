const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test")
Given('I am on the Routine Overview page', async function () {
    await page.goto('http://localhost:3000/') // <-- Nuxt app is running and route '/' is showing.
    await page.getByTestId('closeDrawer').first().click()
    await expect(page.getByTestId('routineOverview')).toBeVisible()
});
Given('I am on the Routine Detail page of a newly created routine', async function () {
    await page.goto('http://localhost:3000/') // <-- Nuxt app is running and route '/' is showing.
    await page.getByTestId('closeDrawer').first().click()
    await page.getByTestId('newRoutine').click()
    await expect(page.getByTestId('routineDetail')).toBeVisible()
});
Then('the {string} component should contain the content {string}', async function (string, string2) {
    const component = await page.getByTestId(string)
    await expect( component.getByText(string2)).toBeTruthy()
});
Given('I am on the Routine Detail page of a newly created routine with the title {string}', async function (string) {
    await page.goto('http://localhost:3000/') // <-- Nuxt app is running and route '/' is showing.
    await page.getByTestId('closeDrawer').first().click()
    await page.getByTestId('newRoutine').click()
    await page.getByTestId('routineTitleInput').fill(string)
});
Then('the {string} component should not contain {string}', async function (string, string2) {
    await expect(page.getByTestId(string).getByText(string2)).toBeFalsy
});
