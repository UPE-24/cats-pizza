import { test as base } from '@playwright/test';
import { HomePage } from '../pom/pages/HomePage';
import { AuthModal } from '../pom/pages/AuthModal';
import { CheckoutPage } from '../pom/pages/CheckoutPage';
import { OredersPage } from '../pom/pages/OredersPage';
// Объявляем типы  фикстур
type MyFixtures = {
  homePage: HomePage;
  authPag: AuthModal;
  checkoutPag: CheckoutPage;
  oredersPag: OredersPage;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, uсe) => {
    const homePage = new HomePage(page);
    await uсe(homePage);
  },
  authPag: async ({ page }, uсe) => {
    const authPag = new AuthModal(page);
    await uсe(authPag);
  },
  checkoutPag: async ({ page }, uсe) => {
    const checkoutPag = new CheckoutPage(page);
    await uсe(checkoutPag);
  },
  oredersPag: async ({ page }, uсe) => {
    const oredersPag = new OredersPage(page);
    await uсe(oredersPag);
  },
});
export { expect } from '@playwright/test';
