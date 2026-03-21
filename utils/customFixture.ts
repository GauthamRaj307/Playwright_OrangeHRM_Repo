import {test as base} from '@playwright/test'
import * as dotenv from'dotenv'
import {authenticationFlow} from '../pages/Auth'
import {Dashboard} from '../pages/dashboard'
import { isContext } from 'node:vm';

dotenv.config();

type MyFixture=
{
     authObj : authenticationFlow;
     dashObj : Dashboard;

}

export const test = base.extend<MyFixture>
({
     authObj: async ({ page, context }, use) => 
          {
               await use(new authenticationFlow(page));
          },
     dashObj: async({page,context},use) =>
     {
          await use(new Dashboard(page));
     },
});

export {expect} from '@playwright/test'