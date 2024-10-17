// JavaScript Polyfill for the `map` Method
// =========================================
// This script demonstrates how to create a custom version of the `map` method 
// for arrays in JavaScript. The `map` method allows us to create a new array 
// with the results of calling a provided function on every element in the array.

// Original usage of `map` method (commented out):
let arr = [1, 2, 3, 4, 5, 6];
// const newArr = arr.map((ele) => ele * 2);
// console.log(`New Array is : ${newArr}`);
// Output:
// New Array is : 2,4,6,8,10,12

// console.log(`Original Array : ${arr}`);
// Output:
// Original Array : 1,2,3,4,5,6

// Now let's create the same behavior with our custom `myMap` method.

// Polyfill for `Array.prototype.myMap`
// -------------------------------------
// `myMap` is a custom method that mimics the behavior of the built-in `map` method.
// It accepts a callback function as an argument and returns a new array with 
// the results of applying the callback to each element of the original array.

Array.prototype.myMap = function(callback) {
    // Create a new array to store the transformed elements.
    let newArray = [];
    // Loop through each element in the array using a `for` loop.
    for (let index = 0; index < this.length; index++) {
        // Call the callback function with three arguments:
        // 1. `this[index]`: The current element of the array.
        // 2. `index`: The index of the current element.
        // 3. `this`: The array on which `myMap` is called.
        let ans = callback(this[index], index, this);
        // Store the result of the callback in the new array.
        newArray[index] = ans;
    }
    // Return the newly created array.
    return newArray;
};

// Example: Using `myMap` with a custom callback function
// ------------------------------------------------------
// Define a function `multiplyByTwo` that returns the element multiplied by 2.
function multiplyByTwo(ele) {
    return ele * 2;
}

// Use the `myMap` method on the `arr` array to create a new array.
const modifiedArray = arr.myMap(multiplyByTwo);
console.log(`Modified Array is : ${modifiedArray}`);
// Output:
// Modified Array is : 2,4,6,8,10,12

console.log(`Original Array : ${arr}`);
// Output:
// Original Array : 1,2,3,4,5,6

// Explanation:
// 1. `Array.prototype.myMap`: Adds a custom method named `myMap` to all arrays.
// 2. `callback` parameter: A function that will be executed for each element of the array.
// 3. Inside the loop, the `callback` function is called for each element in the array, 
//    providing the element, its index, and the entire array as arguments.
// 4. The results of calling the callback are stored in `newArray`, 
//    which is returned at the end of the function.

// Note:
// - Unlike `forEach`, the `map` method returns a new array and does not modify the original array.
// - This polyfill demonstrates how the native `map` method works behind the scenes.
