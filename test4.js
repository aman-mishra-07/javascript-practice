// sorting

function arraySort(inputArray, serial) {
    let order = serial.toString().toLowerCase();
    let arr = inputArray;
     
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
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
    console.log(arr);
}

let array1 = [9,8,7,6,4,7,6,3,2,6,]

arraySort(array1, 'desc');
arraySort(array1, 'asc');

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
}

fibonacci(7)