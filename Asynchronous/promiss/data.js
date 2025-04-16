let employees=[
    {eid:101,ename:"Rahul",esal:45000},
    {eid:102,ename:"Sonia",esal:55000}
]

let createEmployee=(emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{    //javascript is using setTime
            let flag=true;
            flag === true?resolve("Data Inserted"):reject("Failed")
            employees.push(emp)
        },4000)
    });
}
let display_Employees=()=>{
    setTimeout(()=>{
        let rows=""
        for(let employee of employees){
            rows=rows+`<tr>
                        <td>${employee.eid}</td>
                        <td>${employee.ename}</td>
                        <td>${employee.esal}</td>
                     </tr>`
        }
        document.getElementById('tableData').innerHTML=rows
        // document.getElementById('tData').innerHTML="GM"
    },1000)

}
createEmployee({eid:103,ename:"Priyaka",esal:65000})
.then((msg)=>{
    console.log(msg)
    display_Employees()
})
.catch((err)=>{
    console.log(err)
})
