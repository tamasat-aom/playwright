import { test } from "../pages/base";

test.describe("Login", async () => {
  test("success", async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.setUsername("10066260");
    await loginPage.setPassword("P@ssw0rd");
    await loginPage.clickLogin();
    await loginPage.expectResult();
    await loginPage.page.waitForTimeout(1500);
  });
});
