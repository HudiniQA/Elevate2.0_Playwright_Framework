import  { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import {encrypt, decrypt} from "../utils/CryptojsUtil";
import {encryptEnvFile, decryptEnvFile} from "../utils/EncryptEnvFile";
import {testData, invalidPassword, invalidCredentials} from '../testdata/TestData.json';
import logger from "../utils/LoggerUtil";

test("Verify if the user is able to login successfully", async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.enterEmailAddress(testData.emailID);
    await loginPage.enterPassword(testData.password);

    await loginPage.clickLoginBtn();
    await loginPage.clickWalkthroughBtn1();
    await loginPage.clickWalkthroughBtn2();
    const homePage = await loginPage.clickWalkthroughBtn3();
    homePage.expectDashboardLocatorToBeVisible();
});

test("Verify the page title", async ({ page }) => {
    
    logger.info(`===Currently running test: ${test.info().title}===`)
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.getPageTitle();
});

test("Verify the display of validation message when the user clicks on Login button without entering any credentials", async ({ page }) => {
    
    logger.info(`===Currently running test: ${test.info().title}===`)
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.clickLoginBtn();
    await loginPage.verifyEmailRequiredValidationMessage();
});

test("Verify the display of validation message when the user clicks on Login button without entering the password", async ({ page }) => {
    
    logger.info(`===Currently running test: ${test.info().title}===`)
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.enterEmailAddress(testData.emailID);
    await loginPage.clickLoginBtn();
    await loginPage.verifyPasswordRequiredValidationMessage();
});

test("Verify the display of validation message when the user clicks on Login button without entering the email address", async ({ page }) => {
    
    logger.info(`===Currently running test: ${test.info().title}===`)
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.enterPassword(testData.password);
    await loginPage.clickLoginBtn();
    await loginPage.verifyEmailRequiredValidationMessage();
});

test("Verify if the user is able to login with invalid credentials but the user exists", async ({ page }) => {

    logger.info(`===Currently running test: ${test.info().title}===`)
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.enterEmailAddress(invalidPassword.emailID);
    await loginPage.enterPassword(invalidPassword.password);
    await loginPage.clickLoginBtn();
    await loginPage.verifyLoginWithIncorrectCredentials();
   
});

test("Verify if the user is able to login with invalid credentials and the user also does not exist", async ({ page }) => {

    logger.info(`===Currently running test: ${test.info().title}===`)
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.enterEmailAddress(invalidCredentials.emailID);
    await loginPage.enterPassword(invalidCredentials.password);
    await loginPage.clickLoginBtn();
    await loginPage.verifyLoginWithInvalidCredentials();
   
});