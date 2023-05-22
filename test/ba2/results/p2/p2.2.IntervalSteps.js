/*global require, page*/
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const baseURL = 'http://localhost:3000/'

/**
 * This block describes the step where the user opens the application using the baseURL
 */
Given('the user opens the application with the baseURL', async function () {
  await page.goto(baseURL);
});

/**
 * This block describes the step where the visibility of a particular component is checked
 */
Given('the component {string} is visible', async function (component) {
  const componentVisible = await page.getByTestId(component);
  await expect(componentVisible).toBeVisible();
});

/**
 * This block describes the step where the user clicks on a particular button
 */
When('the user clicks on the button {string}', async function (button) {
  const buttonElement = await page.getByTestId(button);
  await buttonElement.click();
});

/**
 * This block describes the step where the user fills a value into a particular field
 */
When('the user fills {string} into the field {string}', async function (value, field) {
  const inputField = await page.getByTestId(field);
  await inputField.fill(value);
});

/**
 * This block describes the step where multiple fields within a component are checked for their visibility and content
 */
Then('the component {string} contains following visible fields with text. title: {string}, duration: {int}, rest: {int}, reps: {int}', async function (string, string2, int, int2, int3) {
  const titleElement = await page.getByTestId(`${string}-title`);
  const durationElement = await page.getByTestId(`${string}-duration`);
  const restElement = await page.getByTestId(`${string}-rest`);
  const repsElement = await page.getByTestId(`${string}-repetitions`);

  await expect(titleElement).toBeVisible();
  await expect(titleElement.textContent()).toBe(string2);

  await expect(durationElement).toBeVisible();
  await expect(durationElement.textContent()).toBe(int.toString());

  await expect(restElement).toBeVisible();
  await expect(restElement.textContent()).toBe(int2.toString());

  await expect(repsElement).toBeVisible();
  await expect(repsElement.textContent()).toBe(int3.toString());
});

/**
 * This block describes the step where a component is checked for its non-visibility
 */
Then('the component {string} is not visible', async function (component) {
  const componentElement = await page.getByTestId(component);
  await expect(componentElement).not.toBeVisible();
});

/**
 * This block describes the step where the user clicks on a button in a particular component
 */
When('the user clicks on the button {string} in the component {string}', async function (string, string2) {
  const buttonElement = await page.getByTestId(`${string}-${string2}`);
  await buttonElement.click();
});