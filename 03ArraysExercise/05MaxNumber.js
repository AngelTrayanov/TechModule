function maxNumber(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let topInteger = true;
        let first = (+arr[i]);
        for (let j = i + 1; j < arr.length; j++) {
            let next = (+arr[j]);
            if (next >= first) {
                topInteger = false;
            }
        }
        if (topInteger) {
            newArr.push(first);
        }
    }
    console.log(newArr.join(' '));
}
maxNumber([41,41,30,24]);