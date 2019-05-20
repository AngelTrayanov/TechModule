function smallestOutOfThreeIntegers(firstInteger, secondInteger, thirdInteger) {
    let smallestNumber = 0;
    if (firstInteger <= secondInteger && firstInteger < thirdInteger) {
        smallestNumber = firstInteger;
    } else if (secondInteger < firstInteger && secondInteger <= thirdInteger) {
        smallestNumber = secondInteger;
    } else {
        smallestNumber = thirdInteger;
    }
    console.log(smallestNumber);
}
smallestOutOfThreeIntegers(2, 0, -1);