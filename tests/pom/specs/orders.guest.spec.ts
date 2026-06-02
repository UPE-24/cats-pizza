import { guestTest as test } from '../../fixtures/app.fixture';
import { CleanupApi } from '../api/CleanupApi';
import { testUsers, testAdress } from '../data/testData';
test.describe('Orders', () => {
  // запуск тестов по очереди
  test.describe.configure({ mode: 'serial' });
  // После тестом отчиска коризну у пользователя по email
  test.afterEach(async ({ request }) => {
    const cleanupApi = new CleanupApi(request);
    await cleanupApi.deleteUserByEmail(testUsers.existing.email);
  });
  // Добавить в каризну + аторизоваться
  test('Mack order with login in checkou', async ({ homePage, checkoutPag, oredersPag }) => {
    await homePage.open();
    await homePage.addFirstCatToCart();
    await homePage.goToCheckoutFromCart();
    await checkoutPag.singInCheckout(testUsers.existing.email, testUsers.existing.password);
    await checkoutPag.fillAdress(testAdress);
    await checkoutPag.submit();
    await oredersPag.open();
    await oredersPag.assertHasOrder();
  });
});
