function distinctArray(arr) {

    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                if (i == arr.length - 1) {
                    arr.splice(i, 1);
                } else {
                    arr.splice(j, 1);
                    i--;
                    break;
                }
            }
        }
    }
    
    console.log(arr.join(' '));
}
distinctArray([20, 8, 12, 13, 4, 4, 8, 5, 5, 5]);