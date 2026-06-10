const { createElement } = require("react");

console.log("print  statement");
const a=20;
const b=30;
console.log(a+b)
const str="preethi"
console.log(str)
const arr=[1,2.4,"String",false]
console.log(arr)
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
arr[1]=3.1
console.log(arr)
arr.push("preethi")
console.log(arr)
arr.pop()
console.log(arr)
function example(){
    console.log("i am writing something")
}
example()
const ptag=document.getElementById("ptag")
ptag.innerHTML="Print Statement"
const first=document.getElementById("input")
const output=document.getElementById("inputfield")
input.addEventListener("input",()=>{
    output.textContent=input.value
})
const first=document.createElement("h1")
first.innerText="some text"
document.body.appendChild(first)/
document.write("bfg")
const h = document.createElement('h1');
h.innerText = "raju";
document.body.appendChild(h)