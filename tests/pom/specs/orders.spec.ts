import { autorizedTest as test } from '../../fixtures/app.fixture';
import { CleanupApi } from '../api/CleanupApi';
import { testUsers, testAdress } from '../data/testData';
test.describe('Orders', () => {
  // запуск тестов по очереди
  test.describe.configure({ mode: 'serial' });
  // После тестом отчиска коризну у пользователя по email
  test.afterEach(async ({ request }) => {
    const cleanupApi = new CleanupApi(request);
    await cleanupApi.deleteOrdersByEmail(testUsers.existing.email);
  });
  // / Добавить в каризну автризованного пользователя
  test('Autorized user makes order wihout manual login', async ({
    homePage,
    checkoutPag,
    oredersPag,
  }) => {
    await homePage.open();
    await homePage.addFirstCatToCart();
    await homePage.goToCheckoutFromCart();
    await checkoutPag.fillAdress(testAdress);
    await checkoutPag.submit();
    await oredersPag.open();
    await oredersPag.assertHasOrder();
  });
});
