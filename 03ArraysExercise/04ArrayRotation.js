function arrayRotation(arr, numberOfRotation) {
    let currentValue;
    // let valueKeeper;
    for (let index = 0; index < numberOfRotation; index++) {
        currentValue = arr.shift(); //takes first Element
        // valueKeeper = currentValue; //first Element
        // currentValue = arr.pop(); //  takes last Element
        //arr.unshift(currentValue); // element goes to beginning
        arr.push(currentValue); // element goes to end
    }
    console.log(arr.join(' '));
}
arrayRotation([2, 4, 15, 31], 2);