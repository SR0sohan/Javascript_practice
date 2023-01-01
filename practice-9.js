let loadscript = async (src) => {
      return new Promise((resolve, reject) => {
            let script = document.createElement("script")
            script.src = src
            script.onload = () => {
                  resolve(src + "loadscript success")
            }
            document.head.append(script)
      })

}

// problem 1

// let a = await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/diat/jd/bootstrap.bundle.min.js")
// a.then((value)=>{
//       console.log(value)
// })

// problem 2

// const man = async () => {
//       console.log(new Date().getMilliseconds())
//       let a = await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/diat/jd/bootstrap.bundle.min.js")
//       console.log(new Date().getMilliseconds())
//       console.log(a)
// }
// man()

// problem 3 

let p = () => {
      return new Promise((resolve, reject) => {
            setTimeout(() => {
                  reject(new Error("it's an error. it is not good"))
            }, 3000)
      })
}
let a = async () => {
      try{
            let c = await p()
            console.log(c)
      }
      catch(err){
            console.log("this error has been handled")
      }
     
}
a()

// problem 4

let zed = async()=>{
      return new Promise((resolve, reject) => {
            setTimeout(() => {
                  resolve(10)
            }, 2000);
      })
}
let zef = async()=>{
      return new Promise((resolve, reject) => {
            setTimeout(() => {
                  resolve(20)
            }, 3000);
      })
}
let zeg = async()=>{
      return new Promise((resolve, reject) => {
            setTimeout(() => {
                  resolve(30)
            }, 4000);
      })
}

const run = async ()=>{
      console.time("run")
      // let d1 = await zed()
      // let d2 = await zef()
      // let d3 = await zeg()
      let d1 = zed()
      let d2 = zef()
      let d3 = zeg()
      let zedfg = await Promise.all([d1,d2,d3])
      console.log(zedfg)
      // console.log(d1, d2,d3)
      console.timeEnd("run")
}
run()