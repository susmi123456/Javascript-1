class Account{
    acc_Id;
    acc_Name;
    acc_Bal;
    constructor(id,name,amount){
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Bal=amount
    }
}

let a1=new Account(101,"Rahul",501);
console.log(a1)
let a2=new Account(102,"Soniya",500001);
console.log(a2)