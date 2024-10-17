// JavaScript Polyfill for the `filter` Method
// ===========================================
// This script demonstrates how to create a custom version of the `filter` method 
// for arrays in JavaScript. The `filter` method allows us to create a new array 
// containing all elements that pass a given test (provided by a callback function).

// Original usage of `filter` method (commented out):
let arr = [10, 20, , , 30, 40];
// const newArray = arr.filter((ele) => ele > 20);
// console.log(newArray);
// Output:
// [30, 40]

// Now let's create the same behavior with our custom `myFilter` method.

// Polyfill for `Array.prototype.myFilter`
// ---------------------------------------
// `myFilter` is a custom method that mimics the behavior of the built-in `filter` method.
// It accepts a callback function as an argument and returns a new array containing 
// only the elements for which the callback returns `true`.

Array.prototype.myFilter = function(callback) {
    // Create a new array to store the elements that pass the test.
    let newArr = [];
    // Loop through each element in the array using a `for` loop.
    for (let index = 0; index < this.length; index++) {
        // Check if the index exists in the array before applying the callback.
        // This ensures we skip over empty slots in sparse arrays.
        if (index in this) {
            // Call the callback function with three arguments:
            // 1. `this[index]`: The current element of the array.
            // 2. `index`: The index of the current element.
            // 3. `this`: The array on which `myFilter` is called.
            let ans = callback(this[index], index, this);
            // If the callback returns `true`, add the element to `newArr`.
            if (ans) {
                newArr.push(this[index]);
            }
        }
    }
    // Return the newly created array containing only the filtered elements.
    return newArr;
};

// Example: Using `myFilter` with a custom callback function
// ---------------------------------------------------------
// Use the `myFilter` method on the `arr` array to create a new array 
// containing elements greater than 20.
const filteredArray = arr.myFilter((e) => e > 20);
console.log(filteredArray);
// Output:
// [30, 40]

// Explanation:
// 1. `Array.prototype.myFilter`: Adds a custom method named `myFilter` to all arrays.
// 2. `callback` parameter: A function that will be executed for each element of the array.
// 3. Inside the loop, we check if the current index exists in the array (handles sparse arrays).
// 4. The `callback` function is called for each element that exists, and if it returns `true`, 
//    that element is added to `newArr`.
// 5. The result is a new array containing only the elements that pass the provided test.

// Note:
// - This polyfill preserves the behavior of the native `filter` method, including handling sparse arrays.
// - It skips over empty slots and only applies the callback to defined elements, keeping the array structure intact.
