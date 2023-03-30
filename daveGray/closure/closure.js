//Closures

// Lexical scope defines how variable names are resolved in nested functions. Nested(child) functions have access to the scope of their parents. 

// This is often confused with the definition of closure, but lexical scope is an essential part of what a closure is but doesn’t define the closure as a whole.

// A closure is a function having access to the variables defined in the scope of its parent even after the parent function has closed / returned

// - A closure is created when we define a function and not when a function is executed


// EXAMPLE 1

// Global scope
let x = 1;

const parentFunction = () => {
    //local scope
    let y = 3;
    console.log(x);
    console.log(y);

    const childFunction = () => {
        console.log(y += 2);
        console.log(x += 2)
    }

    return childFunction;
}

const childFunctionContainer = parentFunction(); // Calling the parentFunction and storing the returned value in childFunctionContainer

childFunctionContainer() // 5 3
childFunctionContainer() // 7 5
childFunctionContainer() // 9 7
console.log(x); // 7 


// EXAMPLE 2

// IIFE (Immediately Invoked Function Expression)
// When we are calling a function immediately after we have defined it

const aFunction = (() => {
    let count = 0;
    console.log(`Initial value: ${count}`)
    return () => { count += 1; console.log(count) }
})()
aFunction() // 1
aFunction() // 2
aFunction() // 3

// Point to be noted here is that the console.log statement defined inside the parent function gets executed once 