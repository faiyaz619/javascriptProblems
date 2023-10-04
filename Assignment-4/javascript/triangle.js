function area(base, height){
    let x= parseInt(base);
    let y=parseInt(height);
    let area=(x*y)*.5;
    return area;
}
let triangleArea=area(3,2);
console.log(triangleArea);
document.write(triangleArea);