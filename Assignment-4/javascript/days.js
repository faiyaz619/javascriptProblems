function year(year){
    let x= parseInt(year);
    let days=x*365;
    return days;
}
let days=year(20);
console.log(days);
document.write(days);