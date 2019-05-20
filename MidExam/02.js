function second(params) {
    let toBuy = params[0].split('|');
    let firstBudget = +params[1];
    let budget = +params[1];
    let clothesMaxPrice = 50;
    let shoesMaxPrice = 35;
    let accessoriesMaxPrice = 20.50;
    let newPrices = [];

    for (let i = 0; i < toBuy.length; i++) {

        let current = toBuy[i].split('->');
        let item = current[0];
        let priceOfItem = +current[1];
        if (item === 'Clothes') {
            if (priceOfItem <= clothesMaxPrice && budget >= priceOfItem) {
                budget -= priceOfItem;
                let newPrice = priceOfItem + (priceOfItem * 0.4);
                newPrice = (newPrice);
                newPrices.push(newPrice.toFixed(2));
            }
        } else if (item === 'Shoes') {
            if (priceOfItem <= shoesMaxPrice && budget >= priceOfItem) {
                budget -= priceOfItem;
                let newPrice = priceOfItem + (priceOfItem * 0.4);
                newPrice = (newPrice);
                newPrices.push(newPrice.toFixed(2));
            }
        } else if (item === 'Accessories') {
            if (priceOfItem <= accessoriesMaxPrice && budget >= priceOfItem) {
                budget -= priceOfItem;
                let newPrice = priceOfItem + (priceOfItem * 0.4);
                newPrices.push(newPrice.toFixed(2));
            }
        }
    }
    let sumNewPrices = 0;
    for (let number of newPrices) {
        sumNewPrices += +(number);
    }
    let finalBudget = budget + sumNewPrices;
    let profit = finalBudget - firstBudget;
    console.log(newPrices.join(' '));
    console.log(`Profit: ${((profit.toFixed(2)))}`);
    if (finalBudget >= 150) {
        console.log('Hello, France!');
    } else {
        console.log('Time to go.');
    }
}
second(['Shoes->41.20|Clothes->20.30|Accessories->40|Shoes->15.60|Shoes->33.30|Clothes->48.60', '90']);
//second(['Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60', '120']);