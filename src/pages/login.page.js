export class LoginPage {
  baseUrl = "https://hrisdev.ace-energy.co.th/login";

  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(this.baseUrl);
  }
}
