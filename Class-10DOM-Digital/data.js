//write script to update/insert data ie current time 
// into document file.

setInterval(()=>{
    let p_Tag=document.getElementsByTagName('p')[0];
    p_Tag.innerHTML=new Date().toLocaleTimeString()
},1000)