function compareArrays(firstArray, secondArray) {
    // let arr = [];
    // let currentWord = '';
    // let checkedWord = '';
    // for (let first = 0; first < firstArray.length; first++) {
    //     currentWord = firstArray[first];
    //     for (let second = 0; second < secondArray.length; second++) {
    //         checkedWord = secondArray[second];
    //         if (currentWord === checkedWord) {
    //             arr.push(currentWord);
    //         }
    //     }
    // }
    // console.log(arr.join('\n'));  - brings every element on new line
    for (let element of firstArray) {
        if (secondArray.includes(element)) {
            console.log(element);
        }
    }
}
compareArrays(["S", "o", "f", "t", "U", "n", "i", " "],
              ["s", "o", "c", "i", "a", "l"]);