const { expect } = require('@playwright/test')
exports.HomePage = class HomePage {
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
      await this.page.goto('https://www.tobania.be/en-gb/')
      await this.acceptCookies.click()
      await expect(page).toHaveTitle(/Tobania - Home/)
    
  }
  async searchKeysInSearchBar (keyword) {
    try {
      await this.searchButton.click()
      await this.searchBar.fill(keyword)
    } catch (e) {
      await page.screenshot({ path: 'screenshots/SearchFailKeyPress.png',fullPage: true  });
      throw e;
    }
  }
   async pressEnterKey () {
    try {
      await this.searchBar.press('Enter')
    } catch (e) {
      await page.screenshot({ path: 'screenshots/SearchFailKeyPress.png',fullPage: true  });
      throw e;
    }
  }
  async clickSearchIcon () {
    try {
      await this.searchButton.click()
    } catch (e) {
      await page.screenshot({ path: 'screenshots/SearchFailButtonClick.png' ,fullPage: true});
      throw e;
    }
  }

  /** Above Methods are refactored **/

  async searchKeyWordAndPressEnter (keyword) {
    try {
      await this.searchButton.click()
      await this.searchBar.fill(keyword)
      await this.searchBar.press('Enter')
    } catch (e) {
      await page.screenshot({ path: 'screenshots/SearchFailKeyPress.png',fullPage: true  });
      throw e;
    }
  }
  async searchKeyWordAndClick (keyword) {
    try {
      await this.searchButton.click()
      await this.searchBar.fill(keyword)
      await this.searchButton.click()
    } catch (e) {
      await page.screenshot({ path: 'screenshots/SearchFailButtonClick.png' ,fullPage: true});
      throw e;
    }
  }
  async assertSearchResults () {
    try {
      const title = await this.page.title()
      await expect(this.page).toHaveTitle(/Search results/)
      await expect(await this.resultsPaneElements.count()).toBeGreaterThan(0)
    } catch (e) {
      await page.screenshot({ path: 'screenshots/SearchFailResultClick.png',fullPage: true });
      throw e;
    }
  }
  async clickOnFirstResultLink () {
    await this.resultsPaneElements.first().click()
  }
  
}
