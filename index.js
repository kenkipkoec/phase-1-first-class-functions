// index.js

// Function that receives a callback function and calls it
function receivesAFunction(callback) {
    callback();
}

// Function that returns a named function
function returnsANamedFunction() {
    return function namedFunction() {
        // Function body
    };
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
    return function() {
        // Function body
    };
}

module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
};
