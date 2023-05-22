/*global require, page*/
const { Given, When, Then, } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const baseURL = 'http://localhost:3000/'

/**
 * Set the initial state for all scenarios
 * Here the user has just opened the application and the sign in component is visible.
 */
Given('the user just opens the application', async function () {
  await page.goto(baseURL);
});

Given('the sign in component is visible', async function () {
  const signInComponent = await page.getByTestId('signInComponent');
  await expect(signInComponent).toBeVisible();
});

/**
 * User authentication scenario
 * The user enters their credentials and submits.
 * After submission, the routine overview component becomes visible.
 */
Given('the user {string} with his password {string} enters his credentials', async function (email, password) {
  const emailInput = await page.getByTestId('signInEmail');
  const passwordInput = await page.getByTestId('signInPassword');
  await emailInput.type(email);
  await passwordInput.type(password);
});

Given('the user submits', async function () {
  const signInButton = await page.getByTestId('signInSubmit');
  await signInButton.click();
});

Given('the routine overview component is visible', async function () {
  const routineOverviewComponent = await page.getByTestId('routineOverviewComponent');
  await expect(routineOverviewComponent).toBeVisible();
});

Then('the users routines list contains at least one routine', async function () {
  const routineList = await page.getByTestId('userRoutinesList');
  const routines = await routineList.$$('[data-testid^="routine-"]');
  await expect(routines.length).toBeGreaterThanOrEqual(1);
});

/**
 * Scenario to see public routines after closing the login component
 */
Given('the user closes the log in component', async function () {
  const closeSignInButton = await page.getByTestId('signInCloseButton');
  await closeSignInButton.click();
});

Then('the public routines list contains at least one routine', async function () {
  const publicRoutinesList = await page.getByTestId('publicRoutinesList');
  const routines = await publicRoutinesList.$$('[data-testid^="routine-"]');
  await expect(routines.length).toBeGreaterThanOrEqual(1);
});

/**
 * Scenario to handle case of unauthorized user attempting to view private routines
 * Ensures that no routines are visible if the user is not authorized.
 */
Then('the private routines list contains no routines', async function () {
  const privateRoutinesList = await page.getByTestId('privateRoutinesList');
  const routines = await privateRoutinesList.$$('[data-testid^="routine-"]');
  await expect(routines.length).toBe(0);
});

/**
 * Scenario to create a new routine
 * The user adds a new routine, enters a title, and submits the routine.
 * After submission, the routine overview is visible again and the new routine is visible in the private routines list.
 */
When('the user adds a new routine', async function () {
  const addRoutineButton = await page.getByTestId('addRoutineButton');
  await addRoutineButton.click();
});

Given('the user enters a title for his new routine', async function () {
  const routineTitleInput = await page.getByTestId('routineTitleInput');
  await routineTitleInput.type('New Routine');
});

Given('submits the new routine', async function () {
  const submitRoutineButton = await page.getByTestId('submitRoutineButton');
  await submitRoutineButton.click();
});

Then('the routines overview should be visible', async function () {
  const routineOverviewComponent = await page.getByTestId('routineOverviewComponent');
  await expect(routineOverviewComponent).toBeVisible();
});

Then('the newly create routine is visible in the private routines list', async function () {
  const privateRoutinesList = await page.getByTestId('privateRoutinesList');
  const routines = await privateRoutinesList.$$('[data-testid^="routine-"]');
  await expect(routines.length).toBeGreaterThanOrEqual(1);
});