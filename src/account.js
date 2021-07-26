class Account {
  constructor(openingBalance = 0, overdraftLimit = 100) {
    this.openingBalance = openingBalance
    this.transactionHistoy = []
    this.overdraftLimit = overdraftLimit
  }

  deposit = (amount) => {
    if (isNaN(amount) === true) {
        throw new Error('Invalid Data Type: Please enter an integer')
    } else if (amount < 0) {
        throw new Error('Invalid Amount: Cannot deposit amount less than £0')
    }
    return this.transactionHistoy.push(amount)
  }

  withdraw = (amount) => {
    if (isNaN(amount) === true) {
        throw new Error('Invalid Data Type: Please enter an integer')
    } else if (amount < 0) {
        throw new Error('Invalid Amount: Cannot withdraw amount less than £0')
    } else if (amount > this.balance() + this.overdraftLimit) {
        throw new Error('Insufficient Funds: Cannot withdraw money')
    }
    let withdrawal = -amount
    return this.transactionHistoy.push(withdrawal)
  }

  balance = () => {
    return this.transactionHistoy.reduce((a, b) => a + b, 0)
  }
}

module.exports = Account
