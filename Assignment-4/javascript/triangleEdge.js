function edge(side1, side2){
    let x= parseInt(side1);
    let y=parseInt(side2);
    let edge=(x+y)-1;
    return edge;
}
let triangleEdge=edge(8, 10);
console.log(triangleEdge);
document.write(triangleEdge);