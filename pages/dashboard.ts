import { Locator, Page } from '@playwright/test'

export class Dashboard
{
    readonly page : Page;
    readonly profileIcon : Locator;
    readonly signoutOption : Locator;

    constructor(page : Page)
    {
        this.page = page;
        this.profileIcon = page.locator('.oxd-userdropdown-tab');
        this.signoutOption = page.getByRole('menuitem', { name: /logout/i });
    }

    async LogingoutUser() : Promise<string>
    {
       
        await this.profileIcon.click();
        await this.signoutOption.click();
        await this.page.waitForURL(/auth\/login/);
        return this.page.url();
    }
}