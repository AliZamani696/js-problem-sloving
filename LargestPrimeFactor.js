

let Num = 600851475143
let ans = 1;
for (let i = 0;i<Num;i++){
        if (Num%i ==0){
                ans *= i
                if (ans == Num){
                        console.log(i)
                }
        }
}
