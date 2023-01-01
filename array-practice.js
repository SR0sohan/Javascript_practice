// practice 1

// let arr_input =[1,2,3,4,5,6,7.54]
// let a = prompt("Enter a number")
// a = Number.parseInt(a)
// arr_input.push(a)
// console.log(arr_input)

// practice 2 

// let arr_input = [1, 2,3, 4, 5, 6, 7.54]
// let a;
// do{
//  a = prompt("Enter a number")
//  a = Number.parseInt(a)
//  arr_input.push(a)
// }while(a !=0);
// console.log(arr_input)


// practice 3 
// let arr_input = [1, 2, 3, 4, 7, 50, 60, 70]
// let new_arr = arr_input.filter((x)=>{
//       return x%10 ==0
// })
// console.log(new_arr)

// practice 4

// let arr_input = [1, 2, 3, 4, 7, 50, 60, 70]
// let new_arr = arr_input.map((x)=>{
//       return x*x
// })
// console.log(new_arr)

// practice 5
let arr_input = [1,2,3,4,5,6,7,8,9]
let new_arr = arr_input.reduce((x1, x2)=>{
      return x1 * x2
})
console.log(new_arr)