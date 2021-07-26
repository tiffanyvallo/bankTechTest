const Account = require('../src/account');

test('can create an account with an opening balance of 0', () => {
  let account = new Account
  expect(account.openingBalance(openingBalance)).toBe(0)
})