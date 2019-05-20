function parte(arr) {
    let partySize = +arr[0];
    let partyDays = +arr[1];

    let totalCoins = 0;

    for (let i = 1; i <= partyDays; i++) {

        if (i % 10 == 0) {
            partySize -= 2;
        }
        if (i % 15 == 0) {
            partySize += 5;
        }
        let moneySpendPerDay = 0;
        totalCoins += 50;
        moneySpendPerDay += partySize * 2;
        if (i % 3 == 0) {
            moneySpendPerDay += partySize * 3;
        }
        if (i % 5 == 0) {
            totalCoins += partySize * 20;
            if (i % 3 == 0) {
                moneySpendPerDay += partySize * 2;
            }
        }
        totalCoins -= moneySpendPerDay;
    }
    
    let coinsPerPerson = totalCoins / partySize;

    console.log(`${partySize} companions received ${Math.floor(coinsPerPerson)} coins each.`);
}
parte(['15','30']);