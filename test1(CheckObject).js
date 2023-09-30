function checkObjIsEmpty(obj) {
    if (Array.isArray(obj)) {
        return false;
    }
    if (obj instanceof Object) {
        return Object.hasOwnProperty(obj.age) ? true : false // it returns keys of object
        // return Object.entries(obj); // it returns keys and values both
        // return Object.values(obj); // it will return key values
    }
    return false;
}
// checkObjIsEmpty({});
let object1 = {
    'name': 'aman',
    'age': 20
}
console.log(checkObjIsEmpty(object1)); // checking an object
console.log(checkObjIsEmpty({})); // checking empty object
console.log(checkObjIsEmpty([])); // checking array

// console.log(object1.entries( ));