class Account {
  constructor(openingBalance = 0) {
    this.openingBalance = openingBalance
    this.transactionHistoy = []
  }

  balance = () => {
    return this.transactionHistoy.reduce((a,b) => a + b, 0) 
  }

  deposit = (amount) => {
    return this.transactionHistoy.push(amount)
  }

}

module.exports = Account