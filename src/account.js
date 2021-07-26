class Account {
  constructor(openingBalance = 0) {
    this.openingBalance = openingBalance
    this.transactionHistoy = []
  }

  deposit = (amount) => {
    return this.transactionHistoy.push(amount)
  }

  balance = () => {
    return this.transactionHistoy.reduce((a,b) => a + b, 0) 
  }

}

module.exports = Account
