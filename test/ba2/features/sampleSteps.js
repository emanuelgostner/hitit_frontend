/*global require, page*/
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const baseURL = 'http://localhost:3000/'

Given('I am on the product listing page', async function () {
  await page.goto(`${baseURL}/products`);
});

When('I click the {string} button for the {string} product', async function (button, product) {
  const addToCartButton = await page.getByTestId(`addToCart-${product.toLowerCase()}`);
  await addToCartButton.click();
});

Then('the {string} product should be in my shopping cart', async function (product) {
  await page.goto(`${baseURL}/cart`);
  const productInCart = await page.getByTestId(`cartItem-${product.toLowerCase()}`);
  expect(productInCart).toBeVisible();
});

Then('the total cost of my shopping cart should be {int}', async function (totalCost) {
  const cartTotal = await page.getByTestId('cartTotal');
  const cartTotalText = await cartTotal.textContent();
  expect(parseFloat(cartTotalText)).toBe(totalCost);
});