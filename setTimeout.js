document.write("hello")

let a = setTimeout(function(){
      alert("i am inside the  the timeout.")
},3000)

let b = prompt("do you want to run the timeout?")
if ("n" == b) {
      clearTimeout(a)
}
console.log(a)

// ////////////////

let sum =(a,b,c)=>{
      console.log("yes I am  running " + (a+b+c))
}

setTimeout( sum, 2000, 1,5,8)



// let f = setInterval(function() {
//       confirm("ok let's go!")
// }, 3000);
// let h = prompt("do you wish to run set interval?")
// if("n" == h){
//       clearInterval(f)
// }
// console.log(f)