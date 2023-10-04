//  function checkNum(val) {
//     if(0 === val % 3){
//         console.log('Fizz');
//     } 
//     else if(0 === val % 5){
//         console.log('Buzz');
//     }
//     else if (0 === val % 5 && 0 === val % 3){
//         console.log('FizzBuzz');
//     }else{
//         console.log('not multiple of 3 and 5');
//     }
//  }

//  for (let val = 1; val <= 10 ; val++) {
//     if(val % 5 === 0 && val % 3 === 0){
//         console.log('FizzBuzz');
//     } 
//     else if( 0 === val % 3 ){
//         console.log('Fizz');
//     }
//     else if (0 === val % 5){
//         console.log('Buzz');
//     }else{
//         console.log('not multiple of 3 and 5');
//     }
//  }

for(let i = 1; i<= 3; i++){
    console.log("\n");
    for (let j = 1; j < i; j++) {
        console.log('* ');  
    }
}