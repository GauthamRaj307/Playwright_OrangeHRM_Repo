import {Locator, Page} from '@playwright/test'
import data from '../testData/testData.json'

export class authenticationFlow
{
     readonly  page : Page;
     readonly userNameField : Locator;
     readonly passwordField : Locator;
     readonly loginButton : Locator;
     //readonly rememberMeButton : Locator;


     constructor(page : Page)
     {
          this.page = page;
          this.userNameField =  page.getByRole('textbox',{'name' : 'Username'});
          this.passwordField =  page.getByRole('textbox',{'name' : 'Password'});
          this.loginButton =  page.getByRole('button',{'name' : 'Login'});
          //this.rememberMeButton = page.getByRole('checkbox',{'name' : ''})
     }


     //Navighating to URKL
     async NavigatingToPage(URL : string) : Promise<void>
     {
          await this.page.goto(URL,{ waitUntil: 'domcontentloaded' })
          await this.page.waitForLoadState('networkidle');
          
     }

     //Login
     async UserLogin(username : string, password : string) : Promise<boolean>
     {
          await this.userNameField.fill(username);
          await this.passwordField.fill(password);
          await this.loginButton.click();
          return true;
     }
}