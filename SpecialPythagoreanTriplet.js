


for(let i =1;i<100;i++){
    for (let j = 1;j<100;j++){
            let b = (j**2 + i**2)/2
            let c = (i**2 - j**2)/2
            let a = (i * j);
        if(a+b+c == 1000){
            console.log(a*b*c);
        }
    }
}
