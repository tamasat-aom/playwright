import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { Components } from "../components";

test.describe("Login function", () => {
  test("Login Success", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const components = new Components(page);

    await loginPage.goto();
    await components.locatorBaseInput("#user-name", "10066260");
    await components.locatorBaseInput("#password", "P@ssw0rd");

    await page.click("#login-button", { delay: 2000 });
    await expect(page).toHaveURL(/.*\/select-level/);
    await page.waitForTimeout(1500);
  });

  // test("Login fail", async ({ page }) => {
  //   const loginPage = new LoginPage(page);
  //   const components = new Components(page);

  //   await loginPage.goto();
  //   await components.locatorBaseInput("#user-name", "1006626");
  //   await components.locatorBaseInput("#password", "P@ssw0rd");

  //   await page.click("#login-button", { delay: 2000 });
  //   await expect(page).toHaveURL(/.*\/login/);
  //   await page.waitForTimeout(1500);
  // });
});
