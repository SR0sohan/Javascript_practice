// problem 1 

let age = prompt("enter your age: ")
age = Number.parseInt(age)
const canDrive = (age) => {
      return age >= 18 ? true : false;
}
if (canDrive(age)) {
      alert("yes,  you can drive")
} else {
      alert("you cannot drive")
}

// problem 2 & 3
let runAgain = true;
const elegible = (time) => {
      return time >= 18 ? true : false;
}

while (runAgain) {
      let time = prompt("enter your age")
      time = Number.parseInt(time)
      // if (time<0) {
      //       console.error("please enter a valid age")
      //       break;
      // }

      if (elegible(time)) {
            alert("yes, you can drive")
      } else {
            alert("you cannot drive")
      }
      runAgain = confirm("do you wnat to know again?")
}

// problem 4 

let num = prompt("enter a number")
num = Number.parseInt(num)

if (num>4){
      location.href ="https//google.com"
}
// problem 5 
let color = prompt("enter a color")
document.body.style.background= color;