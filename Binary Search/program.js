function binarySearch(array, target) {
	let left = 0;
	let right = array.length - 1;
	while (right >= left) {
		const pivot = Math.floor((right + left) / 2);
		if (array[pivot] === target) {
			return pivot;
		} else if (array[pivot] < target) {
			left = pivot + 1;
		} else {
			right = pivot - 1;
		}
	}
	return -1;
}

function binarySearch(array, target) {
	return binarySearchHelper(array, target, 0, array.length - 1)
}

function binarySearchHelper(array, target, left, right) {
    if (right < left) return -1;
    const pivot = Math.floor((right + left) / 2);
    if (array[pivot] === target) return pivot;
    else if (array[pivot] < target) return binarySearchHelper(array, target, pivot + 1, right);
    else if (array[pivot] > target) return binarySearchHelper(array, target, left, right - 1);
}

// Do not edit the line below.
exports.binarySearch = binarySearch;
