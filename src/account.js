class Account {
  constructor(openingBalance = 0) {
    this.openingBalance = openingBalance
    this.transactionHistoy = []
  }

  deposit = (amount) => {
    return this.transactionHistoy.push(amount)
  }
}

module.exports = Account