
let ans = []
for (let i = 0;i<1000;i++){
        for(let n = 0;n<1000;n++){
                let  strnum = (i * n).toString()
                if (strnum.length < 6){
                        continue
                } else if(strnum ==strnum.split("").reverse().join("") ){
                        ans.unshift(strnum)
               }
        }
}
console.log(Math.max(...ans))

