import { guestTest as test } from '../../fixtures/app.fixture';
import { CleanupApi } from '../api/CleanupApi';
import { testUsers } from '../data/testData';
test.describe('Auth', () => {
  // Сохранить email с типизацей
  let createdUserEmail: string | null = null;

  // Удаление email через API
  test.afterAll(async ({ request }) => {
    // валидация email
    if (!createdUserEmail) return;
    const cleanupApi = new CleanupApi(request);
    await cleanupApi.deleteUserByEmail(createdUserEmail);
    createdUserEmail = null;
  });
  // Вход
  test('Sing in', async ({ homePage, authPag }) => {
    await homePage.open();
    await authPag.signIn(testUsers.existing.email, testUsers.existing.password);
    await authPag.assertSignedIn();
  });
  // Регистрация
  test('Sing up', async ({ homePage, authPag }) => {
    createdUserEmail = `${Date.now()}@gmail.com`;
    await homePage.open();
    await authPag.signUp('Имя', createdUserEmail, testUsers.existing.password);
    await authPag.assertSignedIn();
  });
  //Ввод не корректоно пароля
  test('Show erroe for wrong password', async ({ homePage, authPag }) => {
    await homePage.open();
    await authPag.signIn(testUsers.existing.email, 'wrong-password');
    await authPag.assertError('Неверный email или пароль');
  });
  //Регистрация уже зарегстрироного пользователя
  test('Reject dublicate for wrong password', async ({ homePage, authPag }) => {
    await homePage.open();
    await authPag.signUp('Name', testUsers.existing.email, testUsers.existing.password);
    await authPag.assertError('Пользователь с таким email уже существует');
  });
});
