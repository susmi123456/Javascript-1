class Account{
    acc_Id;
    acc_Name;
    min_Bal=500;
    acc_Bal;
    open_Account(){
        console.log("Account Opened Successfuly")
    }
    deposit_Amount(){
        console.log("Deposited Amount")
    }
    withdrawl(){
        console.log("Insuffient bal")
    }
    get_Bal(){
        console.log("Server Busy")
    }
    close_Account(){
        console.log("Try next Time")
    }
 }
 let a1=new Account()
 let a2=new Account()

 a1.open_Account()
 a1.deposit_Amount()
 a1.withdrawl()
 a1.get_Bal()