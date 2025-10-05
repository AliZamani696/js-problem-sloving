let i =0;
while(true){
    let chain = 0;
    let t = (i*(i+1))/2
    for (let j =1;j<parseInt(Math.sqrt(t))+1;j++){
        if(t%j==0){
            if(t/j == j){
                chain++;
            }else{
                chain += 2;
            }
        }
    }
    if (chain > 500){
        console.log(t);
        break;
    }
    i++;
}
