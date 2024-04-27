const arr =  [3,5,2]
//console.log the maximum number of an array
//expected output 5
const maxNumber = Math.max(...arr)
console.log(maxNumber)

//Q2 Remove a specific element 2 from the array. Log the modified array to the console.
// expected output: [3,5]

const elementToRemove = 2;
const indexToRemove = arr.indexOf(elementToRemove);

if (indexToRemove !== -1) {
    arr.splice(indexToRemove, 1);
}

console.log(arr);

//Q3 Multiply each element of the array by a constant value 5 and log the modified array to the console.
//expected output [15,10]
const arr = [3, 5]
const constantValue = 5

const modifiedArray = arr.map(element => element * constantValue)

console.log(modifiedArray)



//find intersection (common elements) of arr and arr2
//expected output: [5]
const arr2 = [5,21,32]
const intersection = arr.filter(element => arr2.includes(element))

console.log(intersection)