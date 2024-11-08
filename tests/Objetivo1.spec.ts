 import { test, expect } from '@playwright/test';
import { LoginPage } from './pageObjets/LoginPage';

//PUNTO 1--------------------------------------------------------------
 test('OrangeHRM-Login-HappyPath', async ({ page }) => {

   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

   await page.locator('input[name =\'username\']').fill('Admin');
   await page.locator('input[name =\'password\']').fill('admin123');
   await page.keyboard.press('Enter');

 });

test('OrangeHRM-Login-UnHappyPath123', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.locator('input[name =\'username\']').fill('Admin');
  await page.locator('input[name =\'password\']').fill('23');
  await page.keyboard.press('Enter');

  const errorMessage = await page.locator('p.oxd-text.oxd-text--p.oxd-alert-content-text');
  await expect(errorMessage).toHaveText('Invalid credentials');

});



