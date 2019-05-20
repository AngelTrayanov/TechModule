function magicSummary(arr) {
    let myArr = arr[0].split(' ');
    let ourSum = (+arr[1]);
    let result = [];
    for (let i = 0; i < myArr.length - 1; i++) {
        let current = +myArr[i];
        for (let j = i + 1; j < myArr.length; j++) {
            let second = +myArr[j];
            if ((current + second) === ourSum) {
                result.push(current+' '+second);
            }
        }

    }
    console.log(result.join('\n'));
}
magicSummary(['14 20 60 13 7 19 8', '27']);