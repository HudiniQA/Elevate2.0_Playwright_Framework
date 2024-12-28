import  { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import {encrypt, decrypt} from "../utils/CryptojsUtil";
import {encryptEnvFile, decryptEnvFile} from "../utils/EncryptEnvFile";
import {testData} from '../testdata/TestData.json';
import logger from "../utils/LoggerUtil";

test("Verify the page title1", async ({ page }) => {
    
    logger.info("Test case->Verify the page title -> Execution started")
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.getPageTitle();
}),

test("abcd", async ({ page }) => {
    
    logger.info("Test case->Verify the page title -> Execution started")
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.getPageTitle();
});