function addOrSubstract(arr) {
    let currentNumber = 0;
    let originalSum = 0;
    let newSum = 0;
    for (let index in arr) {
        currentNumber = arr[index];
        originalSum += currentNumber;
        if (currentNumber % 2 === 0) {
            currentNumber += +index;
            arr[index] = currentNumber;
        } else {
            currentNumber -= +index;
            arr[index] = currentNumber;
        }
        newSum += currentNumber;
        currentNumber = 0;
    }
    console.log(arr);
    console.log(originalSum);
    console.log(newSum);
}
addOrSubstract([-5, 11, 3, 0, 2]);