export class Components {
  constructor(page) {
    this.page = page;
  }

  async locatorBaseInput(id, fill) {
    await this.page.locator(`${id} input`).fill(fill);
  }
}
