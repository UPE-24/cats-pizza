import { test as base } from '@playwright/test';
import { HomePage } from '../pom/pages/HomePage';
import { AuthModal } from '../pom/pages/AuthModal';
import { CheckoutPage } from '../pom/pages/CheckoutPage';
import { OredersPage } from '../pom/pages/OredersPage';
import { CartPage } from '../pom/pages/CartPage';
import path from 'path';
export const authFile = path.join(process.cwd(), 'playwright/.auth/existing-user.json');
// Объявляем типы  фикстур
type MyFixtures = {
  homePage: HomePage;
  authPag: AuthModal;
  checkoutPag: CheckoutPage;
  oredersPag: OredersPage;
  cartPage: CartPage;
};
type AppOptions = {
  storageState: string | undefined;
};
const appTest = base.extend<MyFixtures>({
  homePage: async ({ page }, callback) => {
    const homePage = new HomePage(page);
    await callback(homePage);
  },
  authPag: async ({ page }, callback) => {
    const authPag = new AuthModal(page);
    await callback(authPag);
  },
  checkoutPag: async ({ page }, callback) => {
    const checkoutPag = new CheckoutPage(page);
    await callback(checkoutPag);
  },
  oredersPag: async ({ page }, callback) => {
    const oredersPag = new OredersPage(page);
    await callback(oredersPag);
  },
  cartPage: async ({ page }, callback) => {
    const cartPage = new CartPage(page);
    await callback(cartPage);
  },
});
export const guestTest = appTest;
export const autorizedTest = appTest.extend<AppOptions>({
  storageState: authFile,
});
export { expect } from '@playwright/test';
