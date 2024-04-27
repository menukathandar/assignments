const arr = [3,5,2]
//Q1 calculate length of array and console log
//expected output is 3
const len = arr.length
console.log(len)




//Q2 reverse the array and console log
//expected output [2,5,3]
const rev = [...arr].reverse()// Original array lai as it is xodera copy lai reverse gareko so [...arr] is used, if esto nagarya bhaye 2,5,3 output aauxa even in 3rd question.
console.log(rev)


///Q3 join the array and console log
// expected output 352
let num = arr.join('')// To remove comma between the numbers ('') is used. 
console.log(num)

//Q4 Remove the last element from the array and log the modified array to the console
arr.pop()
console.log(arr)


// Q5 Check if all elements in the num  are even. Log "All even" or "Not all even" accordingly.
const num = [6,4,2,8,10,12]

function areAllEven(arr) {
    return arr.every(num => num % 2 === 0);
}
if (areAllEven(num)) {
    console.log("All even");
} else {
    console.log("Not all even");
}


// Find the index of a specific element in the array. Log the index to the console. 
//expected output: 3
const allNum = [3, 5, 2, 8, 5];
const searchElement = 2;
let index = allNum.indexOf(searchElement) +1
console.log(index)