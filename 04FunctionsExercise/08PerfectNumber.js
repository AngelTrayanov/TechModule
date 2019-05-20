function firstPerfectCheck(number) {
    let sum = 0;
    let checker = number;
    let isPerfect = false;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            if (number !== i) {
                sum += i;
            }
        }
    }
    if (sum === checker) {
        isPerfect = true;
    }
    if (isPerfect) {
        console.log('We have a perfect number!');
    } else {
        console.log('It’s not so perfect.');
    }
}
firstPerfectCheck(28);