function third(params) {
    let ourArr = params.slice();
    let paintings = ourArr.shift().split(' ');
    ourArr.pop();
    
    for (let i = 0; i < ourArr.length; i++) {
        
        let current = ourArr[i].split(' ');
        let command = current[0];
        
        if (command === 'Change') {
            // Change {paintingNumber} {changedNumber} – find the painting with the first number
            // in the collection (if it exists) and change its number with the second number – {changedNumber}. 
            let toChange = current[1];
            let changed = current[2];
            if (paintings.includes(toChange)) {
                let changeIndex = paintings.indexOf(toChange);
                paintings.splice(changeIndex, 1, changed);
            }
        } else if (command === 'Hide') {
            // Hide {paintingNumber} – find the painting with this value and if it exists and hide it (remove it). 
            let hide = current[1];
            if (paintings.includes(hide)) {
                let hideIndex = paintings.indexOf(hide);
                paintings.splice(hideIndex, 1);
            }
        } else if (command === 'Switch') {
            // Switch {paintingNumber} {paintingNumber2} – find the given paintings
            // in the collections if they exist and switch their places. 
            let switchFirst = current[1];
            let switchSecond = current[2];
            if (paintings.includes(switchFirst) && paintings.includes(switchSecond)) {
                let firstIndex = paintings.indexOf(switchFirst);
                let secondIndex = paintings.indexOf(switchSecond);

                let manipulate = paintings[secondIndex];
                paintings[secondIndex] = paintings[firstIndex];
                paintings[firstIndex] = manipulate;
            }
        } else if (command === 'Insert') {
            // Insert {place} {paintingNumber} – insert the painting (paintingNumber)
            // on the next place after the given one, if it exists. 
            let wantedIndex = +current[1];
            wantedIndex++;
            if (wantedIndex >= 0 && wantedIndex < paintings.length) {
                let toInsert = current[2];
                paintings.splice(wantedIndex, 0, toInsert);
            }
        } else if (command === 'Reverse') {
            // Reverse – you must reverse the order of the paintings. 
            paintings.reverse();
        }
    }
    console.log(paintings.join(' '));
}
third(['115 115 101 114 73 111 116 75',
 'Insert 5 114', 'Switch 116 73', 'Hide 75', 'Reverse', 'Change 73 70', 'Insert 10 85', 'END']);