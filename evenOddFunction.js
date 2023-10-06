const oddEven = function(item) {
       if (isNaN(item)) {
        return `${item} is not a number`;
       }
       return item % 2 === 0 ? `${item} is Even No`: `${item} is odd No`;
    };
    
function checkNum(oddEven , arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = (oddEven(arr[i]));
    }
    return arr; 
}

console.log(checkNum(oddEven,[1,2,3,4,'hello',5]));

function evaluate(items) {
	for (let i = 0; i < items.length; i++) {
		items[i] = checkEvenOdd(items[i]);
	}

	function checkEvenOdd(value) {
		if(isNaN(value) || ! Number.isInteger(value)){
			return `${value} is not valid value`;
		}
		return value % 2 === 0 ? `${value} is Even No`: `${value} is odd No`;
	}
	
	return items;
}

console.log(evaluate([1,2,3,4,'good',5.4]));