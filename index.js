// strings for sum
let sum=""
function buildSum(char){
    sum+=char
    document.getElementById("output").innerHTML=sum
}
// equal function
function calculate(){
    sum=eval(sum)
    document.getElementById("output").innerHTML=sum
}
// clear button
function reset(clear){
    sum=""
    document.getElementById("output").innerHTML=sum
}
// // change colors
function redcolor(){
document.getElementById("output").style.color = "red";
}