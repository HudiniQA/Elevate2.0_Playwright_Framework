import  { Page, test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import {encrypt, decrypt} from "../utils/CryptojsUtil";
import {encryptEnvFile, decryptEnvFile} from "../utils/EncryptEnvFile";
import logger from "../utils/LoggerUtil";
import {testData, invalidPassword, invalidCredentials} from '../testdata/TestData.json';
//import {invalidTestData} from '../testdata/TestData.json';

test("Verify if the user is able to login with invalid credentials and the user also does not exist", async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.enterEmailAddress(invalidCredentials.emailID);
    await loginPage.enterPassword(invalidCredentials.password);
    await loginPage.clickLoginBtn();
    await loginPage.verifyLoginWithInvalidCredentials();
   
});