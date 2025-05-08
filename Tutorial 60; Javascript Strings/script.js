console.log("This is strings tutorial")
let a = "Harry";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);

console.log(a.length)

let real_name = "Harry"
let friend = "Rohan"
console.log("His name is " + real_name + " and his friends name is " + friend)
console.log(`His name is ${real_name} and his friends name is ${friend}`)

let b = "ShivamSh"
console.log(b.toUpperCase())// toUpperCase() converts the string to upper case
console.log(b.toUpperCase())// toUpperCase() converts the string to upper case 
console.log(b.length) // length property gives the length of the string
console.log(b.slice(1, 5)) // slice() method extracts a part of a string and returns it as a new string. The method takes 2 parameters: the start position, and the end position (end not included). 
console.log(b.slice(1)) 

console.log(b.replace("Sh", "77")) // replace() method replaces a specified value with another value in a string. The replace() method does not change the original string. It returns a new string.
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))// concat() method joins two or more strings and returns a new string. The original string will remain unchanged.

console.log(b)