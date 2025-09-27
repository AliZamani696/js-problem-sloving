

function mul(number){
        let sum =0;
        for (let i = 1;i<20;i++){
                sum += number % i
        }
        return sum;
}
let i =1;
while (true){
        if (mul(i) == 0){
                console.log("ok",i)
                break;
                }
        i++;
}
