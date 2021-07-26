class Account {
  constructor(openingBalance = 0) {
    this.openingBalance = openingBalance
    this.transactionHistoy = []
  }

  deposit = (amount) => {
    return this.transactionHistoy.push(amount)
  }

  withdraw = (amount) => {
    if (amount > this.balance()) {
      throw new Error ('Insufficient Funds: Cannot withdraw money')
    }
    let withdrawal = - amount
    return this.transactionHistoy.push(withdrawal)
  }

  balance = () => {
    return this.transactionHistoy.reduce((a,b) => a + b, 0) 
  }

}

module.exports = Account
