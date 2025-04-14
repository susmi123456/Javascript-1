let numbers=[1,2,3,4,5,6,7,8,9,10]
// collect all even numbers into new array
let evens=[]
for(let num of numbers){
    if(num%2 === 0){
        evens.push(num);
    }
}
console.log(numbers)
console.log(evens)