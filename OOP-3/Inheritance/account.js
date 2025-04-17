class Account{
    acc_Name;
    acc_Email;
    constructor(name,email){
        this.acc_Name=name;
        this.acc_Email=email;
    }
}
module.exports=Account;  //ES5
//export default Account; //ES6