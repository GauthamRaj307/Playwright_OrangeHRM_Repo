import {expect, test as setup} from  '../utils/customFixture';

setup('storing storage state', async({ page, dashObj,authObj })=>
{
     await authObj.NavigatingToPage(process.env.BASE_URL as string);
     expect(await authObj.UserLogin(process.env.ADMIN_USERNAME as string, process.env.ADMIN_PASSWORD as string)).toBeTruthy();
     await page.context().storageState({path:'playwright/.utils/user.json'});
})