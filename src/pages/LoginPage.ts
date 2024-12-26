import  {Page, expect} from "@playwright/test";
import HomePage from "./HomePage";

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
    }

    async enterEmailAddress(emailid : string)
    {
        await this.page.locator(this.emailTxtField).fill(emailid);
    }

    async enterPassword(password : string)
    {
        await this.page.locator(this.passwordTxtField).fill(password);
    }

    async clickLoginBtn()
    {
        await this.page
        .locator(this.loginBtn)
        .click()
        .catch((error) => {
            console.error('Error clicking login button: ${error}');
            throw error;    //rethrow the error if needed
        })

    }

    async clickWalkthroughBtn1()
    {
        await this.page
        .locator(this.walkthroughBtn1)
        .click()
        .catch((error) => {
            console.error('Error clicking the first walkthrough button: ${error}');
            throw error;    //rethrow the error if needed
        })
        
    }

    async clickWalkthroughBtn2()
    {
        await this.page
        .locator(this.walkthroughBtn2)
        .click()
        .catch((error) => {
            console.error('Error clicking the second walkthrough button: ${error}');
            throw error;    //rethrow the error if needed
        })
   
    }

    async clickWalkthroughBtn3()
    {
        await this.page
        .locator(this.walkthroughBtn3)
        .click()
        .catch((error) => {
            console.error('Error clicking the third walkthrough button: ${error}');
            throw error;    //rethrow the error if needed
        })

        const homePage = new HomePage(this.page);
        return homePage;
    }
}


