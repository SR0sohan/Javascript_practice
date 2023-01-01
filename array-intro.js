let class_marks_12 =  [45,87,56,49,78,86,false,"not present"]
console.log(class_marks_12[5])
// console.log(class_marks_12[9]) will be undefined becouse index 9 doen't exist
// adding a new value to the Array
class_marks_12[8]= 94
// changing a value of an Array 
class_marks_12[0]= 75
console.log(class_marks_12)
// run a for loop of an array 

// let a = [10,11,12,13,14,15,16]
for (let i = 0; i < class_marks_12.length; i++) {
      console.log(class_marks_12[i])
      
}
console.log("The length of mark_class_12 is",class_marks_12.length)
console.log(typeof class_marks_12)
