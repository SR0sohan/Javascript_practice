let p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
            console.log(" resolved after two seconds!");
            resolve(56)
      }, 2000)
})

p1.then((value) => {
      console.log(value)
      let p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                  resolve("promise 2")
            }, 2000);
      })
      return p2
}).then((value) => {
      console.log("we are almost done!",value)
      return 2;
}).then((value) => {
      console.log("we are done",value);
})


// ///////////////////////////////////////////////////////////////

// loadscript function with pormise 


const loadScript = (src) =>{
      return new Promise((resolve, reject) => {
            let script =  document.createElement("script")
            script.type = "text/javascript"
            script.src =src
            document.body.appendChild(src)
            script.onload = () =>{
                  resolve(1)
            }

            script.onerror = () =>{
                  reject(0)
            }
      })
}

let p5 = loadScript("https://localhost:3000/callbacks.js")
p5.then((value)=>{
      console.log(value)
}).catch((error)=>{
      console.log("we are sorry  but we are having problems loading this script!", error)
})