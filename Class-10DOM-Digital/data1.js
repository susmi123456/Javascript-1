//write script to update/insert data into document

let p_Tag_Ref=document.getElementsByTagName('p')[0]
console.log(p_Tag_Ref)
//p_Tag_Ref.innerHTML="GM"
//p_Tag_Ref.innerHTML=new Date()
p_Tag_Ref.innerHTML=new Date().toLocaleTimeString()