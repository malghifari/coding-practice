# Solution 1
# O(NM) time
# O(1) space
def smallestDifference1(arrayOne, arrayTwo):
    # Write your code here.
    minDiff = abs(arrayOne[0] - arrayTwo[0])
    result = [arrayOne[0], arrayTwo[0]]
    for i in range(len(arrayOne)):
        for j in range(len(arrayTwo)):
            diff = abs(arrayOne[i] - arrayTwo[j])
            if diff < minDiff:
                result = [arrayOne[i], arrayTwo[j]]
                minDiff = diff
    return result

# Solution 2
# O(N log N + M log M) time
# O(1) space
def smallestDifference2(arrayOne, arrayTwo):
    # Write your code here.
    arrayOne.sort()
    arrayTwo.sort()
    pointerOne = 0
    pointerTwo = 0
    minDiff = abs(arrayOne[0] - arrayTwo[0])
    result = [arrayOne[0], arrayTwo[0]]
    while pointerOne < len(arrayOne) and pointerTwo < len(arrayTwo):
        curDiff = abs(arrayOne[pointerOne] - arrayTwo[pointerTwo])
        if curDiff < minDiff:
            result = [arrayOne[pointerOne], arrayTwo[pointerTwo]]
            minDiff = curDiff
        if arrayOne[pointerOne] < arrayTwo[pointerTwo]:
            pointerOne += 1
        elif arrayOne[pointerOne] > arrayTwo[pointerTwo]:
            pointerTwo += 1
        else:
            return result
    return result