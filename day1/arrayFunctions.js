let array1 = [1,2,'hello',3,4,'hello' , 'world', , , , , ];

// for each function
array1.forEach((val , idx) => {
    console.log(idx + " " + val);
});

// filter function
let filtered = array1.filter((val) => {
    return val > 2;   // it expect boolean true
});
console.log(filtered);

// find function
let greaterThen = array1.find((val) => {
    return val > 2;
});
console.log(greaterThen);

// includes function
console.log( array1.includes('hello',5));  //returns false
console.log( array1.includes('hello',0));  //returns true

// indexof function 
console.log(array1.indexOf('hello'));

// join function
console.log(array1.join('-'));

// push function
array1.push("new world")
console.log(array1);
console.log(("")? true : false);