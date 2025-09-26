


let fact = 1;
for(let i = 1;i<100;i++){
    fact *=i
}
const num = BigInt(fact).toString()
let sum = 0; 
for(let i=0;i<num.length;i++){
    sum += parseInt(num[i])
}
console.log(sum,num)
