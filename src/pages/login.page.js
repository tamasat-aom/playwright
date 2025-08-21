import { expect } from "@playwright/test";
export class LoginPage {
  baseUrl = "https://hrisdev.ace-energy.co.th/login";

  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(this.baseUrl);
  }
  async setUsername(fill) {
    // ใช้ extension playwright ในการช่วยเขียน

    // await this.page
    //   .locator("label")
    //   .filter({ hasText: "รหัสพนักงาน" })
    //   .fill(fill);
    
    // เขียนเองโดย match id
    await this.page.locator("#user-name input").fill(fill);
  }
  async setPassword(fill) {
    await this.page.locator("#password input").fill(fill);
  }
  async clickLogin() {
    await this.page.click("#login-button");
  }
  async expectResult() {
    await expect(this.page).toHaveURL(/.*\/select-level/);
  }
  async failed() {
    await expect(this.page).toHaveURL(/.*\/login/);
  }
}
