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