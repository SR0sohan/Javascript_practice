let nom = [10,21,25,645,310,60,8]
// for loop
// for (let i = 0; i < nom.length; i++) {
//       console.log(nom[i]);
      
// }
// foreach loop
nom.forEach(element => {
      console.log(element * element)
});


// array.from

let nam = "tasmia"
let arr = Array.from(nam)
console.log(arr)

// for of 

for (const i of nom) {
      console.log(i)
}
// for in 

for (let i in nom){
      console.log(i)
}