let goToGoa =(Succuss,failure)=>{
    let acc_Bal=700;
    if(acc_Bal>1000){
        Succuss("Go and Enjoy")
    }else{
        failure("Go to Psa! - practice")
    }
}
goToGoa((msg)=>{
    console.log(msg)
},(err)=>{
    console.log(err)
})