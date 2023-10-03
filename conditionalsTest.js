// Q1 Create a function that takes a string and returns the first character that repeats. If there is no repeat of a character, return "-1".
function firstRepeat(strVal) {
    let str = strVal;
    let seen = [];

    for(let i = 0; i< str.length; i++) {
        if(! seen.includes(str[i])){
            seen.push(str[i]);
        }
        else{
            return str[i];
        }
    }
    return -1;
}
console.log(firstRepeat('Isiildur'));

// Q2. JavaScript Program to Check Whether a Number is Palindrome or Not? Using operators

let num = 1234321;

function checkPalindrome(inputNum) {
    let number = inputNum.toString();
    for (let i = 0; i < number.length/2; i++) {
       if(number[i] === number[number.length - 1 - i]){
        return `palindrome`;
       }   
    }
    return 'Not palindrome no.';
}
console.log(checkPalindrome(num));

// Q3 JavaScript Program to Check Whether a Number is Armstrong or Not? Using operators

function checkArmstrong(value){
    let num = value.toString();
    let sum = 0;
   
    for(let i = 0; i<num.length; i++){
        sum += num[i]**num.length; 
    }
    if (sum === value) {
        return `It is armstrong number`;
    }
    return `It is not armstrong number`;
}

console.log(checkArmstrong(153));

// Q4 Write a single line of code using the ternary operator to check if a variable value is defined (not undefined) and has a truthy value. If it does, store the result in a variable 'isValid'.

let a = 2, isValid;

((a !== undefined) && (a !== false) && (a !== 0) && (a !== -0) && (a !== NaN) && ( a!== null)) ? isValid = a : isValid;

console.log(isValid);

// Q5 Write a code to swap the values of two variables a and b without using a temporary variable.

function swapNumbers(num1,num2) {
    let firstNum = num1;
    let secondNum = num2;
    secondNum = secondNum - firstNum;
    firstNum = secondNum + firstNum;
    secondNum = firstNum - secondNum;
    return `${firstNum}, ${secondNum}`;
}

console.log(swapNumbers(5,8));

//Q6. Write a function that checks if a given year is a leap year (divisible by 4 and not divisible by 100, except when it's divisible by 400) using only relational operators.

function checkLeapYear(yearVal) {
    let year = yearVal;

    if(((0 === year % 4) && (0 !== year % 100)) || (0 === year % 400)){
        return `${year} is leap year `;
    }
    return `${year} is not a leap year`;
}

console.log(checkLeapYear(2007));
console.log(checkLeapYear(2008));