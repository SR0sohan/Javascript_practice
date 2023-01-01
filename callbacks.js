// syncronous programming

let a = prompt("what is your name?")
let b = prompt ("what is your age?")
let c = prompt("what is your favourite color?")
console.log( a + " is " + b + " years old and has " + c +" favourite color.")



// asynchronous programming
console.log("start")
setTimeout(function () {
      console.log("hey, I am good.!")
},3000)

console.log("end")

// callbacks

function loadScript(src, callback) {
      let script = document.createElement("script");
      script.src = src;
      script.onload = function(){
            console.log("loaded script with src: " + src)
            callback(src);
      }
      document.body.appendChild(script);
}

function hello(src) {
      alert("hello world" + src);
}

function goodmorning(src) {
      alert("good morning!")+ src
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/diat/jd/bootstrap.bundle.min.js", hello)