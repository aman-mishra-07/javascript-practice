// let arr = [1,2,3,4,5,6];
// const person = {
//     'name' : 'Aman',
//     'age' : 20,
//     'funct' : function () {
//         return this.age;        
//     }
// }

// person.age = 30;
// person.name = null;
// person = null;
// console.log(person.funct(), person.name);

// function checkObj(elem) {
//     if((Array.isArray(elem)) && (elem instanceof Array) ){
//        return true;    
//     }
//     else if(elem instanceof Object){
//         return true;
//     }
   
// }
// let arr = [];
// let obj = {
//     'name' : 'raj',
//     'age' : 20
// }
// let hello = 50;
// let hello1 = "My anme Is aman";

// function checkObj(val) {
//     if(Array.isArray(val)){
//         return false;
//     }
//     if(val instanceof Object){
//         return true;
//     }
//     return false;
    
// }

// console.log(checkObj(arr));
// console.log(checkObj(obj))
// console.log(checkObj(hello));
// console.log(checkObj(hello1));

let a  = [1,2,3,4,2,5,2,6,7]
let total = 0;
let reduced = a.reduce((total, num) => {
    return total + num;
})

console.log(reduced);

// a.pop()
// console.log(a);

// a.unshift(3)
// console.log(a);

// a.shift()
// console.log(a);

// a.push(10)
// console.log(a);

// let b = a.slice(1,4)
// console.log(b); 

// console.log(a.slice());

// let n = ['jan' , 'feb', 'june', 'july', 'dec'] 
//  n.splice(2, 'hello')
// console.log(n);

// let str = "hello guys, I am Learning JS"
// let str2 = str.split("a"); 
// console.log(str2);