 import { test, expect } from '@playwright/test';

//PUNTO 1--------------------------------------------------------------
 test('OrangeHRM-Login-VerificarUsuarioAdmin', async ({ page }) => {

   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   await page.locator('input[name =\'username\']').fill('Admin');
   await page.locator('input[name =\'password\']').fill('admin123');
   await page.keyboard.press('Enter');
  await page.click('span.oxd-text.oxd-text--span.oxd-main-menu-item--name');
  await page.click('i.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow');
  await page.click('span[data-v-13cf171c]');
  await page.click('button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space');

  await expect(page.locator('i.oxd-icon.bi-trash').nth(0)).toBeVisible();
  //await expect(page.locator('i.oxd-icon.bi-trash').nth(1)).toBeVisible();
  //await expect(page.locator('i.oxd-icon.bi-trash').nth(2)).toBeVisible();
  //await expect(page.locator('i.oxd-icon.bi-trash').nth(3)).toBeVisible();

  await expect(page.locator('i.oxd-icon.bi-pencil-fill').nth(0)).toBeVisible();
  //await expect(page.locator('i.oxd-icon.bi-pencil-fill').nth(1)).toBeVisible();
  //await expect(page.locator('i.oxd-icon.bi-pencil-fill').nth(2)).toBeVisible();
  //await expect(page.locator('i.oxd-icon.bi-pencil-fill').nth(3)).toBeVisible();
 });

 test('OrangeHRM-Login-VerificarUsuarioAdmin2', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator('input[name =\'username\']').fill('Admin');
  await page.locator('input[name =\'password\']').fill('admin123');
  await page.keyboard.press('Enter');
 await page.click('span.oxd-text.oxd-text--span.oxd-main-menu-item--name');
 await page.click('i.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow');
 await page.click('span[data-v-13cf171c]');
 await page.click('button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space');

 const iconSelectors = [
   '.oxd-icon.bi-trash',
   '.oxd-icon.bi-pencil-fill'
 ];

 for (const selector of iconSelectors) {
   await expect(page.locator(selector)).toHaveCount(1);
 }
});

