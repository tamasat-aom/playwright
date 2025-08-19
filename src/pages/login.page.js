export class LoginPage {
  baseUrl = "http://localhost:3000/login";

  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(this.baseUrl);
  }
}
