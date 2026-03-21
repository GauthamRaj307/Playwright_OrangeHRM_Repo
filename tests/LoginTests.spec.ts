import { test, expect } from '../utils/customFixture';
import data from "../testData/testData.json";

test.describe('Login Tests', () => {
    test('@Regression - Admin Login with valid Credentials', async ({ page, authObj}) => 
     {
        await authObj.NavigatingToPage(process.env.BASE_URL as string);
        expect(await authObj.UserLogin(process.env.ADMIN_USERNAME as string, process.env.ADMIN_PASSWORD as string)).toBeTruthy();
     });
});

test.describe("Logout Test",async()=>
{
     test.only('@Regression - Logout user', async({ page, dashObj,authObj })=>
     {
          await authObj.NavigatingToPage(process.env.BASE_URL as string);
          await authObj.UserLogin(process.env.ADMIN_USERNAME as string, process.env.ADMIN_PASSWORD as string);
          expect(await dashObj.LogingoutUser()).toBe(process.env.BASE_URL);
     })
})
