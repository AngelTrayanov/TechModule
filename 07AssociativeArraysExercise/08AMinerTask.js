function minerTask(arr) {
    let goldDigger = {};

    for (let i = 0; i < arr.length; i++) {

        if (i % 2 === 0) {
            let type = arr[i];
            let quantity = arr[i + 1];
            
            if (!goldDigger.hasOwnProperty(type)) {
                goldDigger[type] = +quantity;
            } else {
                goldDigger[type] += +quantity;
            }
        }

    }
    
    for (let line in goldDigger) {
        console.log(`${line} -> ${goldDigger[line]}`);
    }
}
minerTask(['Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17',
]);