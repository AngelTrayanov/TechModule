function presentDelivery(arr) {
    let ourArr = arr.slice();
    let houses = ourArr.shift().split('@').map(Number);
    ourArr.pop();
    let santaOldPosition = 0;
    let santaCurrentPosition = 0;
    for (let i = 0; i < ourArr.length; i++) {
        let currentJump = ourArr[i].split(' ');
        let jump = +currentJump[1];
        santaOldPosition = santaCurrentPosition;
        if (santaOldPosition === (houses.length - 1)) {
            santaCurrentPosition = jump - 1;
            santaOldPosition = 0;
        } else {
            santaCurrentPosition += jump;
        }
        if (santaCurrentPosition > (houses.length - 1)) {
            while (santaCurrentPosition > (houses.length - 1)) {
                if (santaCurrentPosition % 2 !== 0) {
                    let checker = Math.abs(santaCurrentPosition - (houses.length - (santaOldPosition - 1)));
                    santaCurrentPosition = checker;
                } else {
                    let checker = Math.abs(santaCurrentPosition - (houses.length - (santaOldPosition)));
                    //santaCurrentPosition -= checker;
                    santaCurrentPosition = checker;
                }
            }
        }
        if (houses[santaCurrentPosition] === 0) {
            console.log(`House ${santaCurrentPosition} will have a Merry Christmas.`);
        } else {
            houses[santaCurrentPosition] -= 2;
        }

    }
    console.log(`Santa's last position was ${santaCurrentPosition}.`);
    let successfull = true;
    for (let number of houses) {
        if (number !== 0) {
            successfull = false;
        }
    }
    if (successfull) {
        console.log('Mission was successful.');
    } else {
        let failedHouses = houses.filter((a) => a != 0);
        console.log(`Santa has failed ${failedHouses.length} houses.`);
    }
}
//presentDelivery(['10@10@10@2', 'Jump 1', 'Jump 2', 'Merry Xmas!']);
presentDelivery(['2@4@2', 'Jump 2', 'Jump 2', 'Jump 8', 'Jump 3', 'Jump 1', 'Merry Xmas!']);
//presentDelivery(['2@4@2', 'Jump 2', 'Jump 8', 'Jump 1', 'Merry Xmas!']);