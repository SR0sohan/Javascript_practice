let num = [1,2,3,4,5,6,7]
let word = num.toString()
console.log(word, typeof word)
let joint = num.join(" and ")
console.log(joint)
// pop returns the poped Element
let popper =num.pop()
console.log(num, popper , typeof num)
// push returns new array length
let pushpa =num.push(8,9)
console.log(num ,pushpa)
// shift returns the first value and length
let shifter = num.shift()
console.log(num,  shifter)
// unshift add a new value from first index
let unshifter = num.unshift(10)
console.log( num , unshifter) 

let new_num = [ 11,12,13,14,15,16,17,18];
console.log(new_num, new_num.length)
delete new_num[0]
console.log(new_num, new_num.length)

let concat_num =num.concat(new_num)
console.log(concat_num, concat_num.length)


// sort method sort the object element alphabaticallly not number wise
let compare = (a, b)=>{
      return a - b
}
// assending order needs a defined function to execute
// let conpare =(a,b)=>{
//       return b - a
// }
// dessending order needs a defined function to execute
let sorter = [9,85,226,41,70,14,533333,844]
sorter.sort(compare)
console.log(sorter)
// sorter.reverse()
// sorter.splice(3,3,125,135,326)
// let new_sort= sorter.slice(1,5)
// console.log(new_sort)