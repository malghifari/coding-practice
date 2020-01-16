function binarySearch(array, target) {
	let left = 0;
	let right = array.length - 1;
	while (right > left) {
		const pivot = Math.floor((right + left) / 2);
		if (array[pivot] === target) {
			return pivot;
		} else if (array[left] === target) {
			return left;
		} else if (array[right] === target) {
			return right;
		} else if (array[pivot] < target) {
			left = pivot + 1;
		} else {
			right = pivot - 1;
		}
	}
	return -1;
}

// Do not edit the line below.
exports.binarySearch = binarySearch;
