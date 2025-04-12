class Account{
    min_bal=500;
    acc_bal=0;
    deposit_amount(amount){
        this.acc_bal= this.acc_bal+ amount;
    }
    withdrawl_Amount(amount){
        this.acc_bal= this.acc_bal-amount;
    }
    get_Bal(){
        return this.acc_bal-this.min_bal;
    }
}

let a1=new Account()
console.log(a1)
a1.deposit_amount(500)
a1.deposit_amount(50)

a1.withdrawl_Amount(15)
console.log(a1)

let a2=new Account()
console.log(a2)
a2.deposit_amount(150)
a2.deposit_amount(501)
a2.deposit_amount(15)
a2.withdrawl_Amount(66)
console.log(a2)

console.log(a1.get_Bal())
console.log(a2.get_Bal())