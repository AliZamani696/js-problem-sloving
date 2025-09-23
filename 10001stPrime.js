
function IsPrime(num){
    for (let i =2;i<num;i++){
        if (num % i === 0){
            return false
        }  
    }
    return true
}

let count = 0;
let i = 1;
while(true){
    i++;
    if(IsPrime(i)){
        count++;
        if (count == 10001){
            console.log(i,IsPrime(i),count)
            }
        }
}

