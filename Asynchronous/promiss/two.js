let goToMovie =(Succuss,failure)=>{
    let acc_Bal=700;
    if(acc_Bal>1000){
        Succuss("Go and Enjoy")
    }else{
        failure("Go to Psa! - practices")
    }
}
goToMovie((msg)=>{
    console.log(msg)
},(err)=>{
    console.log(err)
})