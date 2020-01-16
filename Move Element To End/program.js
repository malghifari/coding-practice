function moveElementToEnd(array, toMove) {
	/* 
		Solution 1
		O(N) time
		O(N) space
	*/
	// const choosenNumber = []
	// const restNumber = []
	// const answer = []
	// for (let i=0; i<array.length; i++) {
	// 	if (array[i] === toMove) {
	// 		choosenNumber.push(array[i]);
	// 	} else {
	// 		restNumber.push(array[i]);
	// 	}
	// }
	// return restNumber.concat(choosenNumber);
	/* Solution 1 */
	
	/* 
		Solution 2 
		O(N) time
		O(1) space
	*/
	let leftPointer = 0;
	let rightPointer = array.length - 1;
	let temp;
	while (leftPointer < rightPointer) {
		while (leftPointer < rightPointer && array[rightPointer] === toMove) rightPointer--;
		if (array[leftPointer] === toMove) {
			temp = array[leftPointer];
			array[leftPointer] = array[rightPointer];
			array[rightPointer] = temp;
		}
		leftPointer++;
	}
	return array;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
