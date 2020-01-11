# Solution 1
# O(N^2) time
# O(1) space
def twoNumberSum1(array, targetSum):
    # Write your code here.
    for i in range(len(array)):
        for j in range(i+1, len(array)):
            if array[i] + array[j] == targetSum:
                return [array[i], array[j]]
    return []


# Solution 2
# O(N) time
# O(N) space
def twoNumberSum2(array, targetSum):
    # Write your code here.
    isExist = {}
    for i in range(len(array)):
        isExist[array[i]] = True
    for i in range(len(array)):
        key = targetSum - array[i]
        if key != array[i] and key in isExist:
            return [array[i], key] 
    return []

# Solution 3
# O(N log N) time
# O(1) space
def twoNumberSum3(array, targetSum):
    # Write your code here.
    array.sort()
    leftPointer = 0
    rightPointer = len(array) - 1
    while rightPointer > leftPointer:
        sumPrediction = array[leftPointer] + array[rightPointer]
        if sumPrediction == targetSum:
            return [array[leftPointer], array[rightPointer]]
        elif sumPrediction > targetSum:
            rightPointer -= 1
        else:
            leftPointer += 1
    return []