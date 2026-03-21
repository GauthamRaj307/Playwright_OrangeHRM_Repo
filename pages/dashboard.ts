import {expect, Locator, Page} from '@playwright/test'
import { promises } from 'node:dns';

export class Dashboard
{
    readonly page : Page;
    readonly profileIcon : Locator;
    readonly signoutOption : Locator;

    constructor(page : Page)
    {
        this.page = page;
        this.profileIcon = page.getByText("manda user");
        this.signoutOption = page.getByText("Logout");
    }

    async LogingoutUser() : Promise<string>
    {
        await this.profileIcon.click();
        await this.signoutOption.click();
        return(await this.page.url());
    }
}