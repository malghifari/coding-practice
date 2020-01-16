function fourNumberSum(array, targetSum) {
    /* 
        Solution 1
        O(N^3) time
        O(N) space
    */
    // let numDict = {};
    // let result = [];
    // for (let i=0; i<array.length; i++) {
    //     numDict[array[i]] = i+1;
    // }
    // let currentSum, diff;
    // for (let i=0; i<array.length; i++) {
    //     for (let j=i+1; j<array.length; j++) {
    //         for (let k=j+1; k<array.length; k++) {
    //             currentSum = array[i] + array[j] + array[k];
    //             diff = targetSum - currentSum;
    //             if (numDict[diff]
    //                 && numDict[diff] <= i
    //                 && numDict[diff] <= j 
    //                 && numDict[diff] <= k) {
    //                 result.push([array[i], array[j], array[k], diff]);
    //             }
    //         }
    //     }
    // }
    // return result;
    /* Solution 1 */

    /* 
        Solution 2
        O(N^2) time
    */
    let numPair = {};
    let result = [];
    for (let i=1; i<array.length-1; i++) {
        for (let j=i+1; j<array.length; j++) {
            let currentSum = array[i] + array[j];
            let diff = targetSum - currentSum;
            if (numPair[diff]) {
                for (const pair of numPair[diff]) {
                    result.push(pair.concat([array[i], array[j]]));									
                }
            }
        }
        for (let k=0; k<i; k++) {
            let sumPair = array[i] + array[k];
            if (sumPair in numPair) {
                numPair[sumPair].push([array[k], array[i]]);
            } else {
                numPair[sumPair] = [[array[k], array[i]]];
            }
        }
    }
    return result;
    /* Solution 2 */
}
  
// Do not edit the line below.
exports.fourNumberSum = fourNumberSum;
  