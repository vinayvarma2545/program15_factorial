const value = 5;

if(value<0){
    console.log(`does not exist`)
}

else if(value===0){
    console.log(`the factorial for 0 is always 1`)
}

else{
    result = 1
    for (i=1;i<=value;i++){
        result*=i;
    }
    console.log(`${result}`)
}