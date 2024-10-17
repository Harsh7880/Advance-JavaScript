// JavaScript Polyfill for the `reduce` Method
// =============================================
// This script demonstrates how to create a custom version of the `reduce` method 
// for arrays in JavaScript. The `reduce` method executes a reducer function on 
// each element of the array, resulting in a single output value.

// Original usage of `reduce` method (commented out):
let arr = [1, 2, 3, 4, 5];

// const sum = arr.reduce((acc, cur) => {
//     return acc + cur;
// }, 0);

// console.log(sum); // Output: 15

// Now let's create the same behavior with our custom `myReduce` method.

// Polyfill for `Array.prototype.myReduce`
// -----------------------------------------
// `myReduce` is a custom method that mimics the behavior of the built-in `reduce` method.
// It accepts two parameters: a callback function and an optional initial value.
// The callback function is called for each element of the array and takes four arguments:
// 1. `accumulator`: The accumulated value previously returned in the last invocation of the callback, 
//    or `initialValue`, if supplied.
// 2. `currentValue`: The current element being processed in the array.
// 3. `currentIndex` (optional): The index of the current element being processed.
// 4. `array` (optional): The array `reduce` was called upon.

Array.prototype.myReduce = function(callback, initialValue) {
    // Step 1: Declare variables for the accumulator and starting index.
    let accumulator;
    let startingIndex = 0;

    // Step 2: Determine the initial value for the accumulator.
    // If an initial value is provided, use it.
    // Otherwise, set the accumulator to the first element of the array.
    if (initialValue !== undefined) {
        accumulator = initialValue;
    } else {
        accumulator = this[0]; // Use the first element as the initial accumulator
        startingIndex = 1; // Start iterating from the second element
    }

    // Step 3: Loop through the array starting from the defined starting index.
    for (let index = startingIndex; index < this.length; index++) {
        // Step 4: Check if the index exists in the array to handle sparse arrays.
        if (index in this) {
            // Call the callback function and update the accumulator.
            accumulator = callback(accumulator, this[index], index, this);
        }
    }

    // Step 5: Return the final accumulated result.
    return accumulator;
};

// Example Usage
// --------------
// Use the `myReduce` method on the `arr` array to calculate the sum of its elements.
const newSum = arr.myReduce((acc, cur) => acc + cur, 0);
console.log(newSum); // Output: 15

// Explanation:
// 1. `Array.prototype.myReduce`: Adds a custom method named `myReduce` to all arrays.
// 2. `callback`: A function that will be executed for each element of the array.
// 3. `initialValue`: An optional parameter that sets the initial value of the accumulator.
// 4. Inside the loop, we check if the current index exists in the array (handles sparse arrays).
// 5. The `callback` function is called for each element that exists, and the accumulator is updated.
// 6. The result is a single accumulated value returned after processing all elements of the array.

// Note:
// - This polyfill preserves the behavior of the native `reduce` method, including handling sparse arrays.
// - If the array is empty and no initial value is provided, this polyfill does not handle that case 
//   and will throw an error if attempted.



