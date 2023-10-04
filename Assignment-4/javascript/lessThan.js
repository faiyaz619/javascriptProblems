function numbers(value1,value2){
    let x= value1;
    let y=value2;
    let z=value1+value2;
    if(z<100)
    {
       let z="true"
        return z;
    }
    else{
        let z="false"
        return z;
    }
   
}
let lessThan= numbers(89, 15);
console.log(lessThan);
document.write(lessThan);