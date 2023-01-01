// practice 1

let nam = "soh\"an"
console.log(nam.length)

// practice 2
 let rename = "I AM SOHAN"
 console.log(rename.toLowerCase())

//  practice#
let sentence ="The quick brown fox jumps over the lazy dog"
let word ="fox"
console.log(`The word "${word}" ${sentence.includes(word)? 'is' : 'is not'} in the sentence`);

// practice 3
let money = "please give me tk 500"
let amount =Number.parseInt(money.slice('please give me tk '.length));
console.log(amount)
console.log(typeof amount)

// practice 4
// string is immutable
let friend = 'Tasmia'
friend[4] = "n"
console.log(friend) 
// friend is not changed becoz string is immutable
