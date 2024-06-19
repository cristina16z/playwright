import { test, expect } from '@playwright/test';

const { LoginPage } = require('../pages/login-pages');

import dotenv from 'dotenv'
dotenv.config()

import {CREDENTIALS, URLS} from '../data/Constantes'


test('User must be logged in succesfully ', async ({ page }) => {
    await page.goto(URLS.C_SAUCDEMO);
    const loginPage = new LoginPage(page)
    await loginPage.submitLoginForm(CREDENTIALS.C_SAUCDEMO_USER, CREDENTIALS.C_SAUCDEMO_PASS)
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
  });