

let FirstNum = 0;
let SecondNum = 1;
let sum = 0;
while (FirstNum < 4000000){
       let ThirdNum = FirstNum + SecondNum;
        FirstNum = SecondNum
        SecondNum = ThirdNum
        if(FirstNum %2 ==0){
                sum += FirstNum
        }
}
console.log(sum)

