const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
  /**
   * define selectors using getter methods
   */
  get flashAlert() {
    return $("#flash");
  }
  get _logout() {
    return $('a[href="/logout"]');
  }

  async logout() {
    await (await this._logout).click();
  }
}

module.exports = new SecurePage();
