let promise = new Promise(function (resolve, reject) {
      alert("hello")
      resolve(56)
})

console.log("heloo one")
setTimeout(function () {
      console.log("hello two in  2 soconds")
}, 2000)

console.log("my name is hello three")
console.log(promise)

////////////////////////////////////////

let p = new Promise((resolve, reject) => {
      console.log("promise is pending")
      setTimeout(() => {
            // console.log(" I am a promise and I am fulfilled")
            resolve(true)
            // reject(new Error(" I am an error"))
      }, 4000)
})

let p2 = new Promise((resolve, reject) => {
      console.log("promise is pending")
      setTimeout(() => {
            // console.log(" I am a promise and I am fulfilled")
            // resolve(true)
            reject(new Error(" I am an error"))
      }, 4000)
})
// to get the value
p.then((value) => {
      console.log(value)
})

// to catch the error 
p2.catch((error) => {
      console.log("some error in p2")
})

// ///////////////////////////////////

// the promise api 

let p6 = new Promise((resolve, reject) => {
      setTimeout(() => {
            resolve("value 1")
      }, 1000);
})

let p7 = new Promise((resolve, reject) => {
      setTimeout(() => {
            resolve("value 2")
            // reject(new Error("Error"))
      }, 2000);
})

let p8 = new Promise((resolve, reject) => {
      setTimeout(() => {
            resolve("value 3")
      }, 3000);
})

let promise_all = Promise.all([p6, p7, p8])
// let promise_all = Promise.allSettled([p6, p7, p8])
// let promise_all = Promise.race([p6, p7, p8])
// let promise_all = Promise.any([p6, p7, p8])
promise_all.then((value)=>{
      console.log(value)
})