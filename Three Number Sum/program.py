# Solution 1
# O(N^3) time
# O(N) space
def threeNumberSum1(array, targetSum):
    # Write your code here.
    array.sort()
    result = []
    for i in range(len(array)):
        for j in range(i+1, len(array)):
            for k in range(j+1, len(array)):
                predictedSum = array[i] + array[j] + array[k]
                if predictedSum == targetSum:
                    result.append([array[i], array[j], array[k]])
    return result

# Solution 2
# O (N^2) time
# O (N) space
def threeNumberSum2(array, targetSum):
    array.sort()
    
    numDict = {}
    for i in range(len(array)):
        numDict[array[i]] = True

    resultDict = set(())
    result = []
    for i in range(len(array)):
        for j in range(i+1, len(array)):
            diff = targetSum - array[i] - array[j]
            if diff != array[i] and diff != array[j] and diff in numDict:
                unitResult = [array[i], array[j], diff]
                unitResult.sort() # O (3 log 3)
                if tuple(unitResult) not in resultDict:
                    resultDict.add(tuple(unitResult))
                    result.append(unitResult)
    
    return result

# Solution 3
# O (N^2) time
# O (N) space
def threeNumberSum3(array, targetSum):
    array.sort()
    result = []
    for pivot in range(len(array) - 2):
        leftPointer = pivot + 1
        rightPointer = len(array) - 1
        while rightPointer > leftPointer:
            currentSum = array[pivot] + array[leftPointer] + array[rightPointer]
            if currentSum == targetSum:
                result.append([array[pivot], array[leftPointer], array[rightPointer]])
                leftPointer += 1
                rightPointer -= 1
            elif currentSum > targetSum:
                rightPointer -= 1
            else:
                leftPointer += 1
    return result