const Statement = require("./statement")
const Transaction = require("./transaction")
class Account {
  constructor(openingBalance = 0, overdraftLimit = 100) {
    this.openingBalance = openingBalance
    this.transactionHistoy = []
    this.overdraftLimit = overdraftLimit
  }

  deposit = (amount) => {
    this._depositChecks(amount)
    return this.transactionHistoy.push(new Transaction(amount, amount + this.balance()))
  }

  withdraw = (amount) => {
    this._withdrawChecks(amount)
    let withdrawal = -amount
    return this.transactionHistoy.push(new Transaction(withdrawal, this.balance() - amount))
  }

  balance = () => {
    return this.transactionHistoy.map(transaction => transaction.amount).reduce((a, b) => a + b, 0)
  }

  viewStatement = () => {
    let statement = new Statement
    return statement.printStatement(this.transactionHistoy)
  }

  _depositChecks = (amount) => {
    if (isNaN(amount) === true) {
        throw new Error('Invalid Data Type: Please enter an integer')
  } else if (amount < 0) {
        throw new Error('Invalid Amount: Cannot deposit amount less than £0')
  }
  }

  _withdrawChecks = (amount) => {
    if (isNaN(amount) === true) {
      throw new Error('Invalid Data Type: Please enter an integer')
  } else if (amount < 0) {
      throw new Error('Invalid Amount: Cannot withdraw amount less than £0')
  } else if (amount > this.balance() + this.overdraftLimit) {
      throw new Error('Insufficient Funds: Cannot withdraw money')
  }
  }
}

module.exports = Account
