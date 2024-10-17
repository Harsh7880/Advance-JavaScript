// JavaScript Polyfill for the `call` Method
// ==========================================
// This script demonstrates how to create a custom version of the `call` method 
// for functions in JavaScript. The `call` method calls a function with a given `this` 
// value and arguments provided individually.

Function.prototype.myCall = function(context, ...args) {
    // Step 1: Check if context is null or undefined and set it to the global object.
    // In browsers, `window` is the global object, and in Node.js, it's `global`.
    if (context === null || context === undefined) {
        context = typeof window !== 'undefined' ? window : global;
    }
    
    // Step 2: Create a unique property name to avoid conflicts with existing properties.
    const uniqueFn = Symbol(); // Using Symbol to create a unique property key.

    // Step 3: Assign the current function (`this`) to the unique property on the context.
    context[uniqueFn] = this;

    // Step 4: Call the function with the provided context and arguments, then store the result.
    const result = context[uniqueFn](...args);
    
    // Step 5: Delete the unique property from the context to clean up.
    delete context[uniqueFn];

    // Step 6: Return the result of the function call.
    return result;
};

// Example Usage
// --------------
// Define a sample object and a function that uses `this`.
const obj = {
    name: 'John',
    greet(greeting) {
        return `${greeting}, my name is ${this.name}`;
    }
};

// Use the native call method to call the greet function with `obj` as the context.
// const message = obj.greet.call(obj, 'Hello');
// console.log(message); // Output: "Hello, my name is John"

// Now, let's use our custom myCall method to achieve the same result.
const customMessage = obj.greet.myCall(obj, 'Hi');
console.log(customMessage); // Output: "Hi, my name is John"

// Explanation:
// 1. `Function.prototype.myCall`: Adds a custom method named `myCall` to all functions.
// 2. `context`: The value to use as `this` when calling the function.
// 3. `args`: The arguments to be passed to the function.
// 4. A unique property is created on the context object to reference the function being called.
// 5. The function is called with the context and arguments using the unique property.
// 6. The unique property is deleted afterward to prevent polluting the context object.
// 7. The result of the function call is returned.

