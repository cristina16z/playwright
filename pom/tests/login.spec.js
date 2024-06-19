import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/login-pages');
import dotenv from 'dotenv'
dotenv.config()


test('User must be logged in succesfully ', async ({ page }) => {
    await page.goto(process.env.ENV_SAUCEDEMO_URL);
    const loginPage = new LoginPage(page)
    await loginPage.submitLoginForm(process.env.ENV_SAUCEDEMO_USER, process.env.ENV_SAUCEDEMO_PASS)
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
  });