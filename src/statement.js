class Statement{

  header = () => {
    return 'date    ||  credit  ||  debit  || balance\n'
  }

  formatTransaction = (transaction) => {
    if (transaction.amount < 0) {
      return this._debitTransaction(transaction)
    } else {
      return this._creditTransaction(transaction)
    }
  }

  formatStatement = (transactionHistory) => {
    return transactionHistory.map((transaction) => this.formatTransaction(transaction))
  }

  printStatement = (transactionHistory) => {
    return this.header() + this.formatStatement(transactionHistory).reverse().join('\n')
  }

  _debitTransaction = (transaction) => {
    let formattedAmount = Math.abs(transaction.amount)
    return `${transaction.date} ||  || ${formattedAmount.toFixed(2)} || ${transaction.currentBalance.toFixed(2)}`
  }

  _creditTransaction = (transaction) => {
    return `${transaction.date} || ${transaction.amount.toFixed(2)} ||  || ${transaction.currentBalance.toFixed(2)}`
  }
}

module.exports = Statement