// sum of a random natutal numbers 

let sum = 0;
let num = 4;
// let num = prompt("enter a value");
// num = Number.parseInt(num);

for (let i = 0; i < num; i++) {
    sum += (i+1);
    // console.log((i+1),"+");
}
console.log("sum of first " + num +  " natural number is "  + sum);
