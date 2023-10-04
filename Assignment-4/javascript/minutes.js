function minute(value1){
    let x= parseInt(value1);
    let second=x*60;
    return second;
}
let minutes=minute(5);
console.log(minutes);
document.write(minutes);