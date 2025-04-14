let numbers=[1,2,3,4,5,6,7,8,9,10]
//collect all even numbers into new array
let evens=numbers.filter((num)=>{
    return num%2===0;
})
console.log(numbers)
console.log(evens)