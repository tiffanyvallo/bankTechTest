class Transaction{
  constructor(amount, currentBalance) {
    this.date = new Date().toLocaleDateString()
    this.amount = amount
    this.currentBalance = currentBalance
  }
}

module.exports = Transaction