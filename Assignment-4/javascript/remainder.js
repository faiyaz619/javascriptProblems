function dividor(number1, number2){
    let x= parseInt(number1);
    let y=parseInt(number2);
    let remainder=(x%y);
    return remainder;
}
let remainder=dividor(5,5);
console.log(remainder);
document.write(remainder);