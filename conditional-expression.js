let a = prompt("what is your age?");
a = Number.parseInt(a)   //convert string to number
if (a>0) {
    alert("this a valid age")
}
else{
    alert("this is an invalid age")
}

// if...else if..else condition
let age = prompt("what is your age?");
age = Number.parseInt(age) 
if (age<0) {
    alert("this is an invalid age")
}
else if (age<9) {
    alert("you are a kid , you can not drive")
}
else if (age < 18 && age >= 9) {
    alert("you are still a kid, you can drive after 18")
}
else{
    alert("yes, you can drive but you must get a licence")
}


// ternery oparator
console.log("you can",age< 18?"not drive": "drive" )
// in ternery oparator if the condition is true then the first value will be granted and if the condition is false then the second value will be granted.



// condition ? expression1/value1 : expression2/value2