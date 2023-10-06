//Q1 Modulus Function Without Modulus Oprator

function mod(divident, divisor) {
    return divident - (divisor * parseInt(divident/divisor));
}
console.log(mod(5,2)); // 1
console.log(mod(218, 5)); // 3

// Q2: Create a function that takes three collections of arguments and returns the sum of the product of numbers. Add the result of the first digit in each collection multiplied together to the result of the second digit in each collection multiplied together to get the final solution.
// Product(1,2)(1,1)(2,3)

function product(a,b) {
    function innerProduct(c, d) {
        function mostInnerProduct(e, f) {
            return a * c * e + b * d * f;
        }
        return mostInnerProduct;
    }
    return innerProduct;
}
console.log(product(1,2)(1,1)(2,3));
console.log(product(10,2)(5,0)(2,3));

// Q3 Create a function which takes an array arr of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.
// The returned array should consist of each of the elements from the first array multiplied by the integer.

function multiply(arr) {
    function multiplyNum(n) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push(arr[i] * n);
        }
        return newArr;
    }
    return multiplyNum;
}

console.log(multiply([1,2,3])(2));
console.log(multiply([4, 6, 5])(10));

// Q4: Create a function which takes a parameter n and returns a function such that it, when called n times, returns the string "HelloWorld".

// Examples: 
// lambdaDepth(0) ➞ "HelloWorld"
// lambdaDepth(1)() ➞ "HelloWorld"
// lambdaDepth(2)()() ➞ "HelloWorld"

// Notes : 
// num will always be a non-negative integer.
// If num == 0, return "HelloWorld".
// If num > 0, return a function.
// All non-example test cases come in two forms: checking whether lambda_depth(k), after being called k times, returns a string, and checking whether lambda_depth(k) returns a function.

function lambdaDepth(k) {
    let innerFunction = function(){
        // Below commented Code as per from Notes mentioned in question
        /* if(k === 0){
            return `Hello World`;
        }
        return innerFunction; */

        return `hello world`; // As per return Examples mentioned in Question
    }    
    for (let i = 0; i <= k; i++) {
        innerFunction();
    }
    return innerFunction;
}

console.log(lambdaDepth(3)());
console.log(lambdaDepth(0)());
console.log(lambdaDepth(1)());
// console.log(typeof lambdaDepth(2)()); // for this we have to uncomment inner function Code