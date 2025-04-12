class Account{
    acc_Id;
    acc_Name;
    acc_Bal;
    min_Bal=500;
    constructor(id,name,amount){
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Bal=amount
    }
    open_Account(){
        console.log("Account Opened")
    }
    depoist_Account(amount){
        this.acc_Bal=this.acc_Bal+amount
    }
    withdrawl_Account(amount){
        this.acc_Bal=this.acc_Bal-amount
    }
    get_Bal(){
        return this.acc_Bal-this.min_Bal;
    }
}
let a1=new Account(101,"srikanth",6000)
a1.depoist_Account(4000)
a1.depoist_Account(2000)
a1.depoist_Account(1000)
a1.withdrawl_Account(15);
console.log(a1.get_Bal())

let a2=new Account(102,"naveen",60000)
a2.depoist_Account(100)
a2.withdrawl_Account(200)
console.log(a2.get_Bal())
