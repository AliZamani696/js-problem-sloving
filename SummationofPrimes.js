
function IsPrime(num){
    for (let i =2;i<parseInt(Math.sqrt(num)+1);i++){
        if (num % i === 0){
            return false
        }  
    }
    return true
}

let sum = 0;
let i = 2;
while(i<2000000){
    if(IsPrime(i)){
        sum += i
    }
    i++;
}
console.log(sum)

