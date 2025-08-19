import { expect } from "@playwright/test";
export class LoginPage {
  baseUrl = "https://hrisdev.ace-energy.co.th/login";

  constructor(page) {
    this.page = page;
  }

  async gotoLoginPage() {
    await this.page.goto(this.baseUrl);
  }
  async setUsername(id, fill) {
    await this.page.locator(`${id} input`).fill(fill);
  }
  async setPassword(id, fill) {
    await this.page.locator(`${id} input`).fill(fill);
  }
  async clickLogin() {
    await this.page.click("#login-button", { delay: 2000 });
  }
  async expectResult() {
    await expect(this.page).toHaveURL(/.*\/select-level/);
  }
}
