function searchForZ(arr, commands) {

    let newArrLength = +commands[0];
    let shiftsFromNewArr = +commands[1];
    let searchNumber = +commands[2];
    let newArr = [];
    let counter = 0;

    arr = arr.map(Number);

    for (let i = 0; i < newArrLength; i++) {
        
        let currentNumber = arr[i];
        newArr.push(currentNumber);
        
    }

    for (let j = 0; j < shiftsFromNewArr; j++) {
        
        newArr.shift();
        
    }

    for (let element of newArr) {
        if (element === searchNumber) {
            counter++;
        }
    }
    console.log(`Number ${searchNumber} occurs ${counter} time.`);
}
searchForZ([5, 2, 3, 1, 3, 1, 6],
           [5, 2, 1]);