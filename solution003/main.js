// Given a two-dimensional array of integers, return the flattened version of the array with all 
// the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].


"use strict";

function flattenAndSort(array) {
    let newArray = array[0]
    for( let i = 1; i < array.length; i++) {
        newArray = newArray.concat(array[i])
    }
  // Good luck, brave code warrior!
//   return newArray;
let sorted = newArray.sort((a,b) => a - b)
    return sorted
  
}
flattenAndSort([[4,5,6],[2, 3],[],[0,1]])

function love(n) {
    // let array = n[0]
    // for (let i = 1; i < n.length; i++) {
      // if ( array !== n[i]) {
        console.log( love )
      // }
    // }
  }
  love ([1,1,1,2,1,1])