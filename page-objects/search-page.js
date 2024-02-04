const { expect } = require('@playwright/test')
exports.SearchPage = class SearchPage {
  /**
   * @param {import ('@playwright/test').Page} page
   */
  constructor (page) {
    this.page = page
    this.acceptCookies = page.getByRole('button', { name: 'Ok, cookies' })
    this.searchBar = page.getByPlaceholder('Search')
    this.searchButton = page.getByRole('button', { name: 'Search' })
    this.resultsPaneElements = page.locator('.hs-search-results__link')
  }
  async navigateToHomePage () {
    try {
      await this.page.goto('https://www.tobania.be/en-gb/')

      await this.acceptCookies.click()
      await expect(page).toHaveTitle(/Tobania - Home/)
    } catch (e) {
      console.log(e)
    }
  }

  async searchKeyWordAndPressEnter (keyword) {
    try {
      await this.searchButton.click()
      await this.searchBar.fill(keyword)
      await this.searchBar.press('Enter')
    } catch (e) {
      console.log(e)
    }
  }
  async searchKeyWordAndClick (keyword) {
    try {
      await this.searchButton.click()
      await this.searchBar.fill(keyword)
      await this.searchButton.click()
    } catch (e) {
      console.log(e)
    }
  }
  async assertSearchResults () {
    try {
      const title = await this.page.title()
      await expect(this.page).toHaveTitle(/Search results/)
      await expect(await this.resultsPaneElements.count()).toBeGreaterThan(0)
    } catch (e) {
      console.log(e)
      throw e
    }
  }
  async clickOnFirstResultLink () {
    await this.resultsPaneElements.first().click()
  }
}
