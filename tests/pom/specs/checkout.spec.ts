import { autorizedTest as test } from '../../fixtures/app.fixture';
// Проверка но отоброженсе меседжа что нужно заполнить обезательные поля
test('Authorized user sees validation error for empty required address fields', async ({
  homePage,
  checkoutPag,
}) => {
  await homePage.open();
  await homePage.addFirstCatToCart();
  await homePage.goToCheckoutFromCart();
  await checkoutPag.submitWithoutAdress();
  await checkoutPag.assertValidationError('Пожалуйста, заполните обязательные поля адреса.');
});
