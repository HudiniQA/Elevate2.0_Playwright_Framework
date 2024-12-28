import  {Page, expect} from "@playwright/test";
import HomePage from "./HomePage";
import logger from "../utils/LoggerUtil";

export default class LoginPage
{
    private readonly emailTxtField="//input[@id='email']";
    private readonly passwordTxtField="//input[@id='password']";
    private readonly loginBtn="//span[text()='LOGIN']";
    private readonly walkthroughBtn1 = "(//div[@class='first-time-login-walkthrough']//img)[3]";
    private readonly walkthroughBtn2 = "(//div[@class='first-time-login-walkthrough']//img)[3]";
    private readonly walkthroughBtn3 = "(//div[@class='first-time-login-walkthrough']//img)[3]";
    private readonly emailValidationTxt = "//p[@id='email-helper-text']";
    private readonly passwordValidationTxt = "//p[@id='password-helper-text']";
    private readonly incorrectCredentialsTxt = "//div[text()='Login failed - Incorrect username or password.']";
    private readonly userdoesntexistTxt = "//div[text()='Login failed - User does not exist.']";

    constructor(private page: Page)
    {

    }

    async navigateToLoginPage()
    {
        await this.page.goto("/");
        logger.info("Application opened successfully");
    }

    async getPageTitle()
    {
        var pageTitle = this.page.title();
        await expect(this.page).toHaveTitle('Hudini CMS')
        .catch((error) => {
            logger.error('Title mismatch. Test case failed');
            throw error;
        }).then(()=> logger.info("Title matched. Test case passed"));
    }

    async enterEmailAddress(emailid : string)
    {
        await this.page.locator(this.emailTxtField).fill(emailid);
        logger.info("Entered email address successfully")
    }

    async enterPassword(password : string)
    {
        await this.page.locator(this.passwordTxtField).fill(password);
        logger.info("Entered password successfully");
    }

    async clickLoginBtn()
    {
        await this.page
        .locator(this.loginBtn)
        .click()
        .catch((error) => {
            logger.error('Error clicking login button: ${error}');
            throw error;    //rethrow the error if needed
        }).then(()=> logger.info("Login button clicked successfully"));

    }

    async clickWalkthroughBtn1()
    {
        await this.page
        .locator(this.walkthroughBtn1)
        .click()
        .catch((error) => {
            logger.error('Error clicking the first walkthrough button: ${error}');
            throw error;    //rethrow the error if needed
        }).then(()=> logger.info("First walkthrough button clicked successfully"));
        
    }

    async clickWalkthroughBtn2()
    {
        await this.page
        .locator(this.walkthroughBtn2)
        .click()
        .catch((error) => {
            logger.error('Error clicking the second walkthrough button: ${error}');
            throw error;    //rethrow the error if needed
        }).then(()=> logger.info("Second walkthrough button clicked successfully"));
   
    }

    async clickWalkthroughBtn3()
    {
        await this.page
        .locator(this.walkthroughBtn3)
        .click()
        .catch((error) => {
            logger.error('Error clicking the third walkthrough button: ${error}');
            throw error;    //rethrow the error if needed
        }).then(()=> logger.info("Third walkthrough button clicked successfully"));

        const homePage = new HomePage(this.page);
        return homePage;
    }

    async verifyEmailRequiredValidationMessage()
    {
       try{
        const elementText = await this.page
        .locator(this.emailValidationTxt)
        .textContent();
        logger.info(elementText);

        await expect(elementText).toBe('Email is required');

        logger.info("Test case passed");
       }
       catch(error) {
       logger.error('Validation message mismatch. Test case failed');
       throw error;
       }
    }

    async verifyPasswordRequiredValidationMessage()
    {
       try{
        const elementText = await this.page
        .locator(this.passwordValidationTxt)
        .textContent();
        logger.info(elementText);

        await expect(elementText).toBe('Password is required');

        logger.info("Test case passed");
       }
       catch(error) {
       logger.error('Validation message mismatch. Test case failed');
       throw error;
       }
    }

    async verifyLoginWithIncorrectCredentials()
    {
        
        await expect(this.page.locator(this.incorrectCredentialsTxt)).toHaveText('Login failed - Incorrect username or password.', { timeout: 90000,
        }).catch((error) => {
            logger.error(`User is able to login with incorrect credentials: ${error}`);
            throw error;
        }).then(()=> logger.info("User is unable to login as expected"));
           
        }

        async verifyLoginWithInvalidCredentials()
    {        
        await expect(this.page.locator(this.userdoesntexistTxt)).toHaveText('Login failed - User does not exist.', { timeout: 90000,
        }).catch((error) => {
            logger.error(`User is able to login even if the user does not exist in the system: ${error}`);
            throw error;
        }).then(()=> logger.info("User is unable to login as expected"));
           
        }
   }