import  {Page, expect} from "@playwright/test"
import logger from "../utils/LoggerUtil";

export default class HomePage
{
    private readonly dashboardLocator = "//div[@class='left-bar']//div[@title='Dashboard']//span[text()='Dashboard']";
    
    constructor(private page: Page) {

    }

    async expectDashboardLocatorToBeVisible()
    {
        //await expect(this.page.getByText(this.dashboardLocator)).toBeVisible();
        //await expect(this.page.getByText(this.dashboardLocator)).toBeVisible({timeout:90000});
        await expect(this.page.locator(this.dashboardLocator)).toHaveText('Dashboard', { timeout: 90000,
        }).catch((error) => {
            logger.error(`Error clicking login button: ${error}`);
            throw error;
        }).then(()=> logger.info("Clicked login button succesfully"));
           
        }
   }