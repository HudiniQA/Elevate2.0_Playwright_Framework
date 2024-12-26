import  { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test("Verify if the user is able to login successfully", async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.enterEmailAddress("sandesh.sampathgiri@hudini.io");
    await loginPage.enterPassword("Testing@123");

    await loginPage.clickLoginBtn();
    await loginPage.clickWalkthroughBtn1();
    await loginPage.clickWalkthroughBtn2();
    const homePage = await loginPage.clickWalkthroughBtn3();
    homePage.expectDashboardLocatorToBeVisible();
});