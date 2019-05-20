function merge(firstArray, secondArray) {
    let firstNumber = 0;
    let secondNumber = 0;
    let thirdNumber = 0;
    let thirdArray = [];
    for (let first = 0; first < firstArray.length; first++) {
        firstNumber = firstArray[first];
        secondNumber = secondArray[first];
        if (first % 2 === 0) {
            thirdNumber = (+firstNumber) + (+secondNumber);
        } else {
            thirdNumber = firstNumber + secondNumber;
        }
        thirdArray.push(thirdNumber);
        //console.log(typeof thirdNumber);
    }
    console.log(thirdArray.join(' - '));
}
merge(["13", "12312", "5", "77", "4"],
      ["22", "333", "5", "122", "44"]);