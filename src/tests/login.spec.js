import { test } from "../pages/base";

test.describe("Login function", async () => {
  test("Login Success", async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.setUsername("#user-name", "10066260");
    await loginPage.setPassword("#password", "P@ssw0rd");
    await loginPage.clickLogin();
    await loginPage.expectResult();
    await loginPage.page.waitForTimeout(1500);
  });
});
