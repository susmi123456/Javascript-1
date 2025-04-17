let emp={
    eid:101,
    ename:"Rahul",
    esal:45000,
    email:"rg@gmail.com"
}
let Details={
    email:"rg@gmail.com",
    loc:"waynand"
}
let emp_Details={...emp,...Details}
console.log(emp_Details)
//object doesnt allowed duplicate keys/properties