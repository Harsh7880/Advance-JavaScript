// JavaScript Polyfill for the `bind` Method
// ==========================================
// This script demonstrates how to create a custom version of the `bind` method 
// for functions in JavaScript. The `bind` method creates a new function 
// that, when called, has its `this` keyword set to the provided value, 
// with a given sequence of arguments preceding any provided when the new function is called.

Function.prototype.myBind = function(context = {}, ...args1) {
    // Step 1: Check if the called function is actually a function
    if (typeof this !== 'function') {
        throw new TypeError("Not Callable");
    }

    // Step 2: Store the reference to the original function
    const fn = this;

    // Step 3: Return a new function that binds the original function
    return function (...args2) {
        // Step 4: Use apply or call to invoke the original function with the correct context
        return fn.apply(context, [...args1, ...args2]);
    };
};

// Example Usage
// --------------
// Define a sample object and a function that uses `this`.
const obj = {
    name: 'Harsh',
    greet(greeting, age, year) {
        console.log(`${greeting}, my name is ${this.name}, I am ${age} years old, and I was born in ${year}.`);
    }
};

// Now, let's use our custom myBind method.
const customGreet = obj.greet.myBind(obj, "Hi");
customGreet(21, 1999); // Output: "Hi, my name is Harsh, I am 21 years old, and I was born in 1999."

// Explanation:
// 1. `Function.prototype.myBind`: Adds a custom method named `myBind` to all functions.
// 2. `context`: The value to use as `this` when calling the function.
// 3. `args1`: The initial arguments provided when creating the bound function.
// 4. The original function is referenced in a variable to be called later.
// 5. A new function is returned that merges the initial arguments with any arguments provided when the new function is called.
// 6. The original function is invoked using `apply`, ensuring it runs with the correct context and arguments.
