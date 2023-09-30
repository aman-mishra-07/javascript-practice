let count = 0;
// console.log(count);
function cc(card) {
  
    if (card > 1 && card < 7) {
        count++;  
        console.log(`${count} Bet`);   
    }
    else if(card == 7 || card == 8 || card == 9){
        console.log(`${count} hold`);
    }
    else if( 10 === card || card == 'J' || card == 'Q' || card == 'K' || card == 'A' ){
        count--;
        console.log(`${count} hold`); 

    }
   
}

// ++23456
// 0 = 789
// -- = 10 j q k a

cc(2);  
cc(3); 
cc(7); 
cc('K'); 
cc('A');