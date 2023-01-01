// age lies between 10to20

let age = prompt("what is your age")
age = Number.parseInt(age)
if (age > 10 && age < 20) {
    console.log("your age lies between 10 to 20")
}
else {
    console.log("your age doesn't lies between 10 to 20")
}

// switch statement 

let teamperature = prompt("what is the teamperature");
switch (teamperature) {
    case "24":
        console.log("teamperature is 24 degree")
        break;
    case "25":
        console.log("teamperature is 25 degree")
        break;
    case "26":
        console.log("teamperature is 26 degree")
        break;
    case "27":
        console.log("teamperature is 27 degree")
        break;
    case "28":
        console.log("teamperature is 28 degree")
        break;
    case "28":
        console.log("teamperature is 29 degree")
        break;
    default:
        console.log("it is quit hot")
}

// divisiboly check

let num = prompt("write a number")
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
    alert("your number is divisible by both 2 & 3")
} else {
    alert("your number is not divisible by both 2 & 3")
}


// ternary practice

let dependency = 22;
let a =dependency>18? "you can deive" : "you can't drive"
console.log(a)