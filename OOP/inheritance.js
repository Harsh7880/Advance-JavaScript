 
 // Inheritance using Constructor Function
 
 function BankAccount(customerName,balance=0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
 }
 BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
 }
 BankAccount.prototype.withdraw = function (amount){
    this.balance -= amount;
 }



 function SavingAccount(customerName,balance=0){
    BankAccount.call(this,customerName,balance);
    this.transactionLimit = 50000;
 }



 function CurrentAccpunt(customerName,balance=0){
    BankAccount.call(this,customerName,balance)
    this.transactionLimit = 50000;
 }

// link current object's prototype with parrent constructor prototype
 SavingAccount.prototype = Object.create(BankAccount.prototype);
 CurrentAccpunt.prototype = Object.create(BankAccount.prototype);


 SavingAccount.prototype.transactionLimit = function (amount){
    console.log("limit of 50000 excceded");
 }
 CurrentAccpunt.prototype.transactionLimit = function (amount){
    console.log("limit of 50000 excceded");
 }
 const accunt = new CurrentAccpunt("Harsh",2000);
 accunt.withdraw(50000);
console.log(accunt);


// Inheritance using classes

class BankAccoumnt{
    customerName;
    accountNumber = Date.now();
    balance = 0;

    constructor(customerName,balance=0){
     this.customerName = customerName;
     this.balance = balance;
     this.accountNumber = Date.now();
    }

    deposit(amount){
      this.balance += amount;
    }
    withDraw(amount){
       this.balance -= amount;
    }

}

class CurrentAcount extends BankAccoumnt{
    transactionLimit = 50000;
    constructor(customerName,balance=0){
        super(customerName,balance);
    }
    takeBussinessLoan(amount){
        console.log('Taking Busimess Loan: ' + amount);
    }
}

class SavingAcount extends BankAccoumnt{
    transactionLimit = 10000;
    constructor(customerName,balance=0){
        super(customerName,balance);
    }
    takePersonalLoanLoan(amount){
        console.log('Taking Personal Loan: ' + amount);
    }
}

const harshAccount = new SavingAcount('Harsh',2000);
const AkshatAccount = new CurrentAcount('Akshat',3000);
harshAccount.deposit(50000);
AkshatAccount.deposit(50000);
console.log(harshAccount);
console.log(AkshatAccount);
