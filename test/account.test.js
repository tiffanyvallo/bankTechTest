const Account = require('../src/account');
const Statement = require('../src/statement');


beforeEach(function() {
  account = new Account()
})

describe('#account', () => { 
  test('can create an account with an opening balance of 0', () => {
    expect(account.openingBalance).toBe(0)
  })

  test('can save transactions into an array of transactions', () => {
    account.deposit(100)
    account.withdraw(80)
    // console.log(account.transactionHistory)
    expect(account.transactionHistoy[1].currentBalance).toBe(20)
  })

  test('can print a statement with the inputted account transaction history', () => {
    account.deposit(70567.89)
    account.deposit(478.35)
    account.withdraw(1573.78)
    expect(account.viewStatement()).toEqual(`date    ||  credit  ||  debit  || balance\n${new Date().toLocaleDateString()} ||  || 1573.78 || 69472.46\n${new Date().toLocaleDateString()} || 478.35 ||  || 71046.24\n${new Date().toLocaleDateString()} || 70567.89 ||  || 70567.89`)
  })

})

describe('#deposit', () => {
  test('can deposit money into an account', () => {
    account.deposit(10000)
    expect(account.balance()).toEqual(10000)
  })
  test('cannot deposit amount less than £0', () => {
    expect(() => {
      account.deposit(-100)
    }).toThrow('Invalid Amount: Cannot deposit amount less than £0')
  })
  test('canot deposit invalid data type', () => {
    expect(() => {
      account.deposit('MONEY!!')
    }).toThrow('Invalid Data Type: Please enter an integer')
  })
  test('can deposit floats', () => {
    account.deposit(10735.80)
    expect(account.balance()).toEqual(10735.80)
  })
})

describe('#withdraw', () => {
  test('can withdraw money from account', () => {
    account.deposit(1000)
    account.withdraw(800)
    expect(account.balance()).toEqual(200)
  })
  test('cannot withdraw if amount is greater than overdraft', () => {
    account.deposit(1000)
    expect(() => {
      account.withdraw(1101)
    }).toThrow('Insufficient Funds: Cannot withdraw money')
  })
  test('cannot withdraw an amount less than 0', () => {
    expect(() => {
      account.withdraw(-100)
    }).toThrow('Invalid Amount: Cannot withdraw amount less than £0')
  })
  test('cannot withdraw invalid data type', () => {
    expect(() => {
      account.withdraw('MONEY!!')
    }).toThrow('Invalid Data Type: Please enter an integer')
  })
  test('can withdraw floats', () => {
    account.deposit(22567.00)
    account.withdraw(567.50)
    expect(account.balance()).toEqual(21999.50)
  })
  test('can have an overdraft limit with a default of £100', () => {
    account.deposit(500)
    account.withdraw(550)
    expect(account.balance()).toEqual(-50)
  })
})