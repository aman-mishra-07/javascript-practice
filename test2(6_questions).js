// // Q1. Counting Occurrence of elements

// let array1 = ['a','b','a','a','a','l','m','n','m'];
// let array2 = [1,2,3,4,5,1,2,34,5];

// function countUniqueNum(val) {
//     let countElements = {};
//     val.forEach(elem => {
//         countElements[elem] = (countElements[elem] || 0) + 1;
//     });
//     return countElements;
// }
// console.log(countUniqueNum(array1));
// console.log(countUniqueNum(array2));


// // Q2. counting in depth elements 

// let arrayNum = [1,2,3,[1,3,5,[2,3,4,5,6,[8,6,5,43]],2,4,6],4,6,8];

// function arrayLength(val) {
//     return val.flat(Infinity).length;    
// }

// console.log(arrayLength(arrayNum));

// // Q3. Given a word, create an object that stores the indexes of each letter in an array.

// let str = "dodo";

// function mapLetters(val) {
//     let indexes = {};
//     let arr = val.split("");
//     arr.forEach((letter, idx) =>{
//         if(!indexes[letter]){
//             indexes[letter] = [idx]
//         }
//         else{
//             indexes[letter].push(idx);
//         }
//     });
//     return indexes;

// }
// console.log(mapLetters(str));
// console.log(mapLetters("froggy"));

// // Q4. Create a function that gets the name of the piece of jewelry with the highest price and returns "The most expensive one is the {name of jewelry piece}".

// function mostExpensive(val) {
//     let price = Object.values(val); // array of price 
    
//     let expensive = price.reduce((a,b) => Math.max(a,b)); // finding maximum value of array price
    
//     let expensiveKey = (obj, value) =>{ return Object.keys(obj).find((key) => obj[key] === value)}; //function of finding key of expensive price

//     return `The most expensive one is the ${expensiveKey(val, expensive)}`;
// }
// let jewelryProducts = {'Gold Watch':400, 'Diamond Earrings':980, 'Pearl Necklace':4650 };
// console.log(mostExpensive(jewelryProducts));


// // Q5. Create a function that takes one, two or more numbers as arguments and adds them together to get a new number. The function then repeatedly multiplies the digits of the new number by each other, yielding a new number, until the product is only 1 digit long. Return the final product.

// function sumDigProd() {
//     let args = Array.from(arguments);
//     let sum = args.reduce((num1, num2) => {return num1 + num2});
//     function prod(val) {
//        let a = val.toString().split("");
//         a = a.reduce((a, b) => a*b);
//         let b = a.toString().split("");
//         a = b.reduce((a, b) => a*b);
//         return a
//     }
//     return prod(sum);
// }
// console.log(sumDigProd(4,7));
// console.log(sumDigProd(16,28));

// // Q6. Create a function that takes an array of names in the format "First Name Last Name" (e.g. "SIMRAN kAUR"), and returns an array of these names sorted by the length of their last names. If the length of multiple last names are the same, then proceed to sort alphabetically by last name.

// let userNmes = ['simran kaur', 'shivam rajput' , 'karan aujla' , 'deep kaur']

// function compareStrings(a,b) {
//     if (a < b) return -1;
//     if (a > b) return 1;
//     return 0;
// }
// function compare(s1,s2) {
//     let splitS1 = s1.split(" ");
//     let splitS2 = s2.split(" ");

//     let lastS1 = splitS1[splitS1.length - 1];
//     let lastS2 = splitS2[splitS2.length - 1];

//     return lastS1 === lastS2 ? compareStrings(lastS1.length,lastS2.length) : compareStrings(lastS1,lastS2)

// }
// console.log(userNmes.sort(compare));

let arr = [1,2,3,4,5,6,7];
arr.map((elem) => {
    if(elem === 3){
        // continue;
    }
    else{
        console.log(elem);
    }
})