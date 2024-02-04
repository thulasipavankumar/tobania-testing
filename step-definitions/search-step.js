const {SearchPage} = require('../page-objects/search-page')
const { Given, When, Then } = require('@cucumber/cucumber')
const { test, expect } = require('@playwright/test')

Given('User visit tobania website', async () => {
  const searchPage = new SearchPage(global.page)
  await searchPage.navigateToHomePage();
})

When('User enters the keyword in the search bar and presses enter',async (dataTable) => {
    const data = dataTable.rowsHash();
    const searchPage = new SearchPage(global.page)
    await searchPage.searchKeyWordAndPressEnter(data['Query string'])
})

When('User enters the keyword in the search bar and clicks the search icon',async (dataTable) => {
    const data = dataTable.rowsHash();
    const searchPage = new SearchPage(global.page)
    await searchPage.searchKeyWordAndClick(data['Query string']);
})

Then('user should see relevant search results', async () => {
  const searchPage = new SearchPage(global.page)
  await searchPage.assertSearchResults();
})

Then('user clicks on the top result for more information', async () => {
  const searchPage = new SearchPage(global.page)
  await searchPage.clickOnFirstResultLink();
})
