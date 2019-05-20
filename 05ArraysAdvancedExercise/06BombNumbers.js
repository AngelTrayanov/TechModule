function boom(arr, bomb) {
    let bombNumber = +bomb[0];
    let sequenceBombing = +bomb[1];
    arr = arr.map(Number);
    for (let i = 0; i < arr.length; i++) {
        let currentNumber = +arr[i];
        if (currentNumber === bombNumber) {
            let start = Math.max(0, i - sequenceBombing);
            let bobmingArea = (2 * sequenceBombing) + 1;
            arr.splice(start, bobmingArea);
            i--;
        }
    }
    let sum = 0;
    for (let num of arr) {
        sum += +num;
    }
    console.log(sum);
}
boom([1, 2, 2, 4, 2, 2, 2, 9, 1],
    [4, 2]);