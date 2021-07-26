const Account = require('../src/account');

beforeEach(function() {
  account = new Account()
})

test('can create an account with an opening balance of 0', () => {
  expect(account.openingBalance).toBe(0)
})

test('can save transactions into an array of transactions', () => {
  account.deposit(100)
  account.withdraw(80)
  // console.log(account.transactionHistory)
  expect(account.transactionHistoy).toContain(100,-80)
})

describe('#deposit', () => {
  test('can deposit money into an account', () => {
    account.deposit(10000)
    expect(account.balance()).toEqual(10000)
  })
})

describe('#withdraw', () => {
  test('can withdraw money from account', () => {
    account.deposit(1000)
    account.withdraw(800)
    expect(account.balance()).toEqual(200)
  })
})