let employees=[
    {eid:101,ename:"Rahul",esal:45000},
    {eid:102,ename:"Sonia",esal:55000}
]
let createEmployee=(emp)=>{
    setTimeout(()=>{
        employees.push(emp)
        Callback()
    },4000)
}

let displayEmployees=()=>{
    setTimeout(()=>{
        let rows=""
        for(let employee of employees){
            rows=rows+`<tr>
                        <td>${employee.eid}</td>
                        <td>${employee.ename}</td>
                        <td>${employee.esal}</td>
                     </tr>`
        }
        document.getElementById('tData').innerHTML=rows
        // document.getElementById('tData').innerHTML="GM"
    },1000)
}

let exec = async()=>{
    await createEmployee({eid:103,ename:"Priyanka",esal:65000})
    displayEmployees()
}
exec()