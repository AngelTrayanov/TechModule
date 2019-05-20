function santaGifts(params) {
    let ourArr = params.slice(0);
    let numberOfComands = ourArr.shift();
    let houses = ourArr.shift().split(' ');
    let santaIndex = 0;

    for (let i = 0; i < numberOfComands; i++) {
        let current = ourArr[i].split(' ');
        let command = current[0];

        if (command == 'Forward') {
            let forward = santaIndex + (+current[1]);
            if (forward < (houses.length)) {
                santaIndex = forward;
                houses.splice(santaIndex, 1);
            }
        } else if (command == 'Back') {
            let backwards = santaIndex - (+current[1]);
            if (backwards >= 0) {
                santaIndex = backwards;
                houses.splice(santaIndex, 1);
            }
        } else if (command == 'Gift') {
            let giftIndex = +current[1];
            let toAdd = current[2];
            if (giftIndex >= 0 && giftIndex < houses.length) {
                houses.splice(giftIndex, 0, toAdd);
                santaIndex = giftIndex;
            }
        } else if (command == 'Swap') {
            let firstHouse = current[1];
            let secondHouse = current[2];
            if (houses.includes(firstHouse) && houses.includes(secondHouse)) {
                let firstIndex = houses.indexOf(firstHouse);
                let secondIndex = houses.indexOf(secondHouse);

                let manipulate = houses[firstIndex];
                houses[firstIndex] = houses[secondIndex];
                houses[secondIndex] = manipulate;
            }
        }

    }
    console.log(`Position: ${santaIndex}`);
    console.log(houses.join(', '));
}
//santaGifts(['3', '50 20 10', 'Forward 1', 'Forward 1', 'Back 1']);
santaGifts(['6', '50 40 25 63 78 54 66 77 24 87', 'Forward 4', 'Back 3', 'Forward 3', 'Gift 2 88', 'Swap 50 87', 'Forward 1']);
//  santaGifts(['5', '255 500 54 78 98 24 30 47 69 58',
//     'Forward 1', 'Swap 54 47', 'Gift 1 20', 'Back 1', 'Forward 3'
// ]);
//santaGifts(['1', '255 500 54 78 98 24 30 47','Swap 54 47']);