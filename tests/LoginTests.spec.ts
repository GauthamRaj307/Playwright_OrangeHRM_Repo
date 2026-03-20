import  {test,expect} from '../utils/customFixture'
import data from "../testData/testData.json"
import { authenticationFlow } from '../pages/Auth'

test.describe('Login Tests', ()=>
{
     test('@Regression - Admin Login with valid Credentials', async({page})=>
     {
          const auth = new authenticationFlow(page);
          auth.NavigatingToPage(data.LoginPageUrl);

          expect(await auth.UserLogin(data.AdminDetails.Username,data.AdminDetails.Password )).toBeTruthy();
     })
})