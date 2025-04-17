let Account = require('./account')
class CA extends Account{
    acc_Id;
    acc_Bal;
    min_Bal=5000
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
let ca1=new CA(102,"Sonia","Sonia@gmail.com",6000)
console.log(ca1)