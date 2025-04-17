class Account{
    acc_Name;
    acc_Email;
    constructor(name,email){
        this.acc_Name=name;
        this.acc_Email=email;
    }

}

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
let sa1=new SA(101,"Rahul","Rahul@gmail.com",1000) //how to initilize object value
let ca1=new CA(102,"Sonia","Sonia@gmail.com",10000) //how to initilize object value
console.log(sa1)
console.log(ca1)

sa1.deposit_Amount(6000)
ca1.deposit_Amount(40000)

console.log(sa1)
console.log(ca1)

console.log(sa1.get_Bal())
console.log(ca1.get_Bal())