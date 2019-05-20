function equalSums(arr) {
    let leftSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i > 0) {
            leftSum += arr[i - 1];
        }
        let rightSum = 0;
        for (let j = i + 1; j < arr.length; j++) {
            rightSum += arr[j];
        }
        if (leftSum === rightSum) {
            console.log(i);
            return;
        }
    }
    console.log('no');
}
equalSums([1, 2, 3, 3]);