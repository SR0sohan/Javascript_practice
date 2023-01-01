let arr = [41,52,63]

// Array map method 
let a = arr.map((value, index, Array)=>{
      console.log(value, index, Array)
      return value + 1
})
console.log(a)


// arrray filter method 

let arr2 = [41,52,63,2,5,9,7]
let arrow = arr2.filter((sowrd)=>{
      return sowrd<10
})
console.log(arrow)

// array reduce method is used to reduce an array to a single value
let err =[1,2,3,4,5,6,7]
const reduce_func = (a1,b2)=>{
      return a1 + b2
}
let newErr = err.reduce(reduce_func)
console.log(newErr)