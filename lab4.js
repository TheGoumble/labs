// LAB 1 - Loops
// Create an array of names of your classmates
// Create a for loop that goes through the array and logs each name in the array
// Now create another for loop that goes through the array in REVERSE and logs each name

// EXAMPLE
// Array: const names = ['Jimmy', 'Frank', 'Ben']
// Output should be:
// Jimmy
// Frank
// Ben
// Ben
// Frank
// Jimmy
const names = ['bruh', 'stink', 'coding', 'thing']
for (let i = 0; i < names.length; i++){
    console.log(names[i])
}
for (let i = names.length; i > -1; i--){
    console.log(names[i])
}



// use a for loop to print a half pyramid of *
// Example output:
// *
// **
// ***
// ****
// *****

let a = []
let x = 4
let y = 0

for (let j = 0; j <= x; j += 2){
    a.push(' ')
}
for (let i = 0; i <= x; i++){

    a.push('*')
    for(let y = -1; y<= i; y++){
        a.push('*')
    }
    console.log(...a)
    a.shift()
 }
