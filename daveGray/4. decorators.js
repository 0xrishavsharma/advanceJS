// Decorate functions enhance/decorate the core functionality of other functions.
// These wrappers "decorate" the original function with new capabilities
// Like during diwali we decorate our house by adding new functionalities which are different from the core functionalities of the house throughout the year
// Benefits: D.R.Y and if we create decorator function a generic one then we can use them on many functions when needed(and applicable of course) creating clean code throughout the project.

// EXAMPLE 1
// Using closure to log how many times a function is called 

// NOTE: The following is not yet a decorator and it is just a core/main function for now on which we'll apply a decorator. We have used "let" instead of "const", usually when defining a function we use "const" but when we know we are going to use it with decorators we can use "let" because then we can continue to use same name for our function even after it's decorated. The reason is given in the example below.

let sum = (...args) => {
    return [...args].reduce((acc, num) => acc + num);
}

const decoratorCallCounter = (fn) => {
    let count = 0;

    return (...args) => {
        //Write to logs, console, db, etc.
        console.log(`sum has been called ${count += 1} times`);
        return fn(...args);
    }
}

sum = decoratorCallCounter(sum)

console.log(sum(1, 2, 3));
console.log(sum(2, 4));
console.log(sum(23, 59));
