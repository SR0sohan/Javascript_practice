async function happy() {
      let p1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                  resolve("21 degree")
            }, 3000)
      })

      let j1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                  resolve("24 degree")
            }, 7000)
      })
      // p1.then(alert)
      // j1.then(alert)
      console.log("fetching p1 weather please wait")
      let p0 = await p1
      console.log("fetched p0 weather:" + p0)

      console.log("fetching j1 weather please wait")
      let j0 = await j1
      console.log("fetched j1 weather:" + j0)

      return [p0, j0]
}
let rumu = async () => {
      console.log("hey i am waiting, finish up!")
}

const kotha= async () => {
      console.log("welcome to weather controll")
      let a = await happy();
      let b = await rumu()
      // a.then((value) => {
      //       console.log(value)
      // })
}
kotha()