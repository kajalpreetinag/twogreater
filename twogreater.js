const input= require("readline-sync")
let a = input.questionInt("enter first number: ")
let b = input.questionInt("enter second number: ")

if (a>b)
{
    l=a;
}
else{
    l=b
}
console.log("l is greater",l)