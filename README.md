# Bank Tech Test in JavaScript

![bankTechTestDemo](public/images/js-test.gif)

## Requirements
You should be able to interact with your code via the JavaScript console.
Deposits, withdrawal.
Account statement (date, amount, balance) printing.
Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria
Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```
## Planning and Approach: 

### Approach
- With the given requirements, I created [user stories](#user-stories) and [edge cases](#edge-cases)
- I decided to create 3 classes, `Account`, `Transaction` and `Satement` in order to maintatin single responsibility principle
- To help understand what I needed for each class, I created a domain model to help understand what I intended what each class would hold
<br>
<br>
<details>
<summary>Domain Models</summary>
<br>
<img src="/public/images/domain_model_bttJS.png">
</details>
<br>

### User Stories
```
As a client
So that I can be smart with my money
I would like to open a bank account with default balance of £0.00
```
```
As a client
So that I can store money in my account
I would like to be able to make a deposit
```
```
As a client
So that I can use my money
I would like to be able to make a withdrawal
```
```
As a client
So that I can keep an eye on my finances
I would like to be able to see my bank balance
```
```
As a client
So I can have emergency funds
I would like to have an overdraft limit
```
```
As a client
So that I can view my account
I would like to be able to print a dated bank statement of my transactions
```
```
As a client
So I can keep on top of my finaces
I want my account statement to display the date, transaction amount, type, and current balance
```
```
As a client
So I can see an up to date history of my transactions
I want to be able to see my account statement listed in reverse chronology by date created
```
### Edge Cases
```
As a client
So I do not go into debt
I want my account to prevent withdrawal if I have insufficient funds
```
```
As a client
So that I am not taking out the correct amount
I would like to be notified if I try to withdraw an amount less than £0
```
```
As a client
So that I am depositing the correct amount 
I would like to be notified if I try to deposit an amount less than £0
```
```
As a client
So I know I am adding real money
I want to be notified if I try to enter anything other than an integer or float
```

## How to use
Clone this repo and move into the project directory.
Run `yarn install` to ensure all node modules are running.
To use this app you will need to run node on your command line

```
$ git clone https://github.com/tiffanyvallo/bankTechTest.git
$ cd bankTechTest
$ yarn install
$ node
```
Once node is running, you will need to require the account.js file
```
# Node session
> let connection = require('./src/account')
```
You then need to create a new instance of the account class
```
> let account = new connection
```
You can withdraw and deposit any amount of money using the following commands
```
> account.deposit(10000.50)
> account.withdraw(7500.50)
```
To check your balance you can run the following command
```
> account.balance()
```
To get a printed statement of your transactions
```
> console.log(account.viewStatement())
```

## How to run tests
To install Jest run
```
yarn add --dev jest
```
To run test 
```
yarn test
```

Test results for this application
<details>
<summary>Jest</summary>
<br>
<img src="/public/images/jestBank.png">
</details>
<br>

## Code Dependecies
  - JavaScript
  - Jest
  - node