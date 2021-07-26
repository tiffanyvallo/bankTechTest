const Account = require('../src/account');

beforeEach(function() {
  account = new Account()
})

test('can create an account with an opening balance of 0', () => {
  expect(account.openingBalance).toBe(0)
})

describe('#deposit', () => {
  test('can save a deposit into an array of transactions', () => {
    account.deposit(10000)
    expect(account.transactionHistoy).toContain(10000)
  })

  test('can deposit money into an account', () => {
    account.deposit(10000)
    expect(account.balance()).toEqual(10000)
  })
})

describe('#withdraw', () => {
  test('can save a deposit into an array of transactions', () => {
    account.withdraw(7000)
    expect(account.transactionHistoy).toContain(-7000)
  })
})