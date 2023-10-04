function circuitPower(current, voltage){
    let x= parseInt(current);
    let y=parseInt(voltage);
    let power=(x*y);
    return power;
}
let power=circuitPower(480, 20);
console.log(power);
document.write(power);