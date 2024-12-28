import  { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import {encrypt, decrypt} from "../utils/CryptojsUtil";
import {encryptEnvFile, decryptEnvFile} from "../utils/EncryptEnvFile";
import {testData} from '../testdata/TestData.json';
import logger from "../utils/LoggerUtil";

test("Verify the page title", async ({ page }) => {
    
    logger.info(`===Currently running test: ${test.info().title}===`)
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.getPageTitle();
});

