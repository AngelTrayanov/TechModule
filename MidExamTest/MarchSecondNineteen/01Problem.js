function solve(input) {
    
    let budget = +input[0];
    let students = +input[1];
    let flourPricePerPack = +input[2];
    let eggPricePerEgg = +input[3];
    let apronPrice = +input[4];

    let apronTotalPrice = apronPrice * (Math.ceil(students + (students * 0.2)));
    let eggTotalPrice = eggPricePerEgg * 10 * students;
    let flourTotalPrice = 0;
    if (students >= 5) {
        let freeFlour = (students / 5);
        flourTotalPrice = flourPricePerPack * Math.ceil(students - freeFlour);
    } else {
        flourTotalPrice = flourPricePerPack * students;
    }

    let moneyNeeded = apronTotalPrice + eggTotalPrice + flourTotalPrice;
    
    if (moneyNeeded <= budget) {
        console.log(`Items purchased for ${moneyNeeded.toFixed(2)}$.`);
    } else {
        let needed = Math.abs(budget - moneyNeeded);
        console.log(`${needed.toFixed(2)}$ more needed.`);
    }
}
//solve([50, 2, 1.0, 0.10, 10.0]);
solve([100, 26, 4, 1, 6]);