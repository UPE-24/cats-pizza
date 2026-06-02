import { test as base } from '@playwright/test';
import { HomePage } from '../pom/pages/HomePage';
import { AuthModal } from '../pom/pages/AuthModal';
import { CheckoutPage } from '../pom/pages/CheckoutPage';
import { OredersPage } from '../pom/pages/OredersPage';
import path from 'path';
export const authFile = path.join(process.cwd(), 'playwright/.auth/existing-user.json');
// Объявляем типы  фикстур
type MyFixtures = {
  homePage: HomePage;
  authPag: AuthModal;
  checkoutPag: CheckoutPage;
  oredersPag: OredersPage;
};
type AppOptions = {
  storageState: string | undefined;
};
const appTest = base.extend<MyFixtures>({
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
export const guestTest = appTest;
export const autorizedTest = appTest.expect<AppOptions>({
  storageState: authFile,
});
export { expect } from '@playwright/test';
