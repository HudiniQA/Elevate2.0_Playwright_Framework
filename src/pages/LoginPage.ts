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


    constructor(private page: Page)
    {

    }

    async navigateToLoginPage()
    {
        await this.page.goto("/");
        logger.info("Navigated to Elevate Staging instance");
    }

    async getPageTitle()
    {
        var pageTitle = this.page.title();
        //await expect(this.page).toHaveTitle('Hudini CMS123');
        await expect(this.page).toHaveTitle('Hudini CMS123')
        .catch((error) => {
            logger.error('Title does not match');
            throw error;
        }).then(()=> logger.info("Title matched successfully"));
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
}


