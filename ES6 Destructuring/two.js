let state={
    ename:"Rahul",
    product:{
        pName:"Market Pen",
        price:30,
        discout:true
    },
    user:{
        uid:101,
        uname:"Sonai"
    }
}

let {ename,product}=state  //object destructuring
let {pName}=product
console.log(ename)
console.log(pName)