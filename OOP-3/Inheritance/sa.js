let Account = require('./account')
class SA extends Account{
    acc_Id;
    acc_Bal;
    min_Bal=500;
    constructor(id,name,email,amount){
        super(name,email) //invoking parent class constructor
        this.acc_Id=id;
        this.acc_Bal=amount;
    }
    deposit_Amount(amount){
        this.acc_Bal=this.acc_Bal+amount;
    }
    get_Bal(){
        return this.acc_Bal-this.min_Bal;
    }
}
let sa1=new SA(101,"Rahul","Rahul@gmail.com",1000)
console.log(sa1)