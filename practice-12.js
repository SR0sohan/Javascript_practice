const a =(text, n=2) =>{
      return new Promise((resolve, reject) => {
            setTimeout(() => {
               resolve(text)   
            },2000 * n);
      })
}

(
      async()=>{
            let text = await a("hello")
            console.log(text)
            text = await a("hello2")
            console.log(text)
      }
)();


function sum(a,b,c) {
      return a+ b+c
} 
let x = [1,2,5]
console.log(sum(...x));

(
      async()=>{
            let text = await a("I am resolving after 1 second", 1)
            console.log(text)
            text = await a("I am resolving after 4 seconds", 4)
            console.log(text)
      }
)()

function simple(p,r,t) {
      return(p*r*t)/100;
}
console.log(simple(1000, 5,1))