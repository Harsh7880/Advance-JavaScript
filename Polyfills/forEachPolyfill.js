// JavaScript Polyfill for the `forEach` Method
// =============================================
// This script demonstrates how to create a custom version of the `forEach` method
// for arrays in JavaScript. The `forEach` method allows us to iterate over each 
// element in an array and perform a specified action on each element.

// Original usage of `forEach` method (commented out):
let arr = [1, 2, , ,  3, 4, 5, 6];
// arr.forEach((ele) => {
//     console.log(`Element is : ${ele}`);
// });
// Output:
// Element is : 1
// Element is : 2
// Element is : 3
// Element is : 4
// Element is : 5
// Element is : 6

// Now let's create the same behavior with our custom `myForEach` method.

// Polyfill for `Array.prototype.myForEach`
// -----------------------------------------
// `myForEach` is a custom method that mimics the behavior of the built-in `forEach` method.
// It accepts a callback function as an argument and executes it for each element in the array.

Array.prototype.myForEach = function(callback) {
    // Loop through each element in the array using a `for` loop.
    for (let index = 0; index < this.length; index++) {
        // Call the callback function with three arguments:
        // 1. `this[index]`: The current element of the array.
        // 2. `index`: The index of the current element.
        // 3. `this`: The array on which `myForEach` is called.
        if(index in this){
            callback(this[index], index, this);

        }
    }
};

// Example: Using `myForEach` with a custom callback function
// ----------------------------------------------------------
// Define a function `printNumber` that logs each element of the array.
function printNumber(ele) {
    console.log(`Element is : ${ele}`);
}

// Use the `myForEach` method on the `arr` array to iterate and print each element.
arr.myForEach(printNumber);
// Output:
// Element is : 1
// Element is : 2
// Element is : 3
// Element is : 4
// Element is : 5
// Element is : 6

// Explanation:
// 1. `Array.prototype.myForEach`: Adds a custom method named `myForEach` to all arrays.
// 2. `callback` parameter: A function that will be executed for each element of the array.
// 3. Inside the loop, the `callback` function is called for each element in the array, 
//    providing the element, its index, and the entire array as arguments.
// 4. `printNumber` is a simple callback function that logs each element of the array 
//    with a custom message.

// Note:
// - This polyfill demonstrates how the native `forEach` method works behind the scenes.
