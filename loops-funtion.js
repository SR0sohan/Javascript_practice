let marks = {
    Sohan: 68,
    Robin: 54,
    shanto: 62,
    Bappy: 78
}
for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object,keys(marks)[i]]);
    
}

let mark = {
    Sulota: 58,
    Momo: 64,
    Rumu: 62,
    Kotha: 78
}
for (const key in mark) {
    console.log("The marks of " + key + " are " + mark[key]);
}

let correctOne = 9;
let i;
while (i != correctOne) {
    console.log("Wrong number, try again");
    i = prompt("Enter a number which is correct");
}
console.log("You have entered the correct number");

const mean = (a,b,c,d) =>{
    return(a + b + c + d)/ 4
}
console.log(mean(4, 5, 6, 7));