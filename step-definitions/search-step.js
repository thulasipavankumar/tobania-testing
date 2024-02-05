const {HomePage} = require('../page-objects/home-page')
const { Given, When, Then } = require('@cucumber/cucumber')
const { test, expect } = require('@playwright/test')

Given('User visits tobania website', async () => {
  const homePage = new HomePage(global.page)
  await homePage.navigateToHomePage();
})

When('User enters a keyword in the search bar and clicks the search icon',async (dataTable) => {
    const data = dataTable.rowsHash();
    const homePage = new HomePage(global.page)
    await homePage.searchKeyWordAndPressEnter(data['Query string'])
})

When('User enters a keyword in the search bar and presses enter',async (dataTable) => {
    const data = dataTable.rowsHash();
    const homePage = new HomePage(global.page)
    await homePage.searchKeyWordAndClick(data['Query string']);
})

Then('user should see relevant search results', async () => {
  const homePage = new HomePage(global.page)
  await homePage.assertSearchResults();
})

Then('user clicks on the top result for more information', async () => {
  const homePage = new HomePage(global.page)
  await homePage.clickOnFirstResultLink();
})
