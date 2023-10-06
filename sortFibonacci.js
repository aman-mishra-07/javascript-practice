// sorting

function arraySort(inputArray, serial) {
    let order = serial.toString().toLowerCase();
    let arr = inputArray;
     
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1; j++) {
            if((order === 'desc') && (arr[j] < arr[j + 1])){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            else if((order === 'asc') && (arr[j] > arr[j + 1])){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }  
        }   
    } 
    return arr;
}

let array1 = [9,8,7,6,4,7,6,3,2,6,]

console.log(arraySort(array1, 'desc'));
console.log(arraySort(array1, 'asc'));

// Fibonacci

function fibonacci(val) {
    let terms = val;
    let num1, num2, nextTerm;
    num1 = 0;
    num2 = 1;

    for (let i = 0; i < terms; i++) {
        console.log(num1);
        nextTerm = num1 + num2;
        num1 = num2;
        num2 = nextTerm;  
    }
};

fibonacci(7);

// let depthArray = [1,2,3,[2,3,[4,5,6,[7,8,9,[4,5,[4,[6],6],7,],8],9],6],3]

// function checkDepth(params) {
    
// }

let myarr = [3,5,6,2,3,4,1,9];

myarr.sort((a,b) => { // for acending
    if(a>b) return true;
    if(a<b) return -1;
    return 0;  
})

// myarr.sort((a,b) => { // for decending
//     if(a>b) return -1;
//     if(a<b) return 1;
//     return 0;  
// })
console.log(myarr);
