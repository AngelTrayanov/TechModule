function first(params) {
    let ourArr = params.slice(0);

    let days = Number(ourArr.shift());
    let budget = Number(ourArr.shift());
    let people = Number(ourArr.shift());
    let fuelPerKm = Number(ourArr.shift());
    let foodPricePerPerson = Number(ourArr.shift());
    let roomPricePerPerson = Number(ourArr.shift());

    ourArr = ourArr.map(Number);
    let currentExpenses = 0;
    let foodExpenses = days * people * foodPricePerPerson;
    let hotelExpenses = 0;
    let counter = 1;

    if (people > 10) {
        hotelExpenses = days * people * roomPricePerPerson;
        let discount = hotelExpenses * 0.25;
        hotelExpenses -= discount;
    } else {
        hotelExpenses = days * people * roomPricePerPerson;
    }

    currentExpenses += (hotelExpenses + foodExpenses);

    for (let i = 0; i < days; i++) {

        let traveledDistance = ourArr[i];
        let fuelConsumed = 0;
        fuelConsumed = traveledDistance * fuelPerKm;
        currentExpenses += fuelConsumed;

        if (counter % 3 === 0 || counter % 5 === 0) {
            let additionalExpenses = currentExpenses * 0.4;
            currentExpenses += additionalExpenses;
        }
        if (counter % 7 === 0) {
            let reduce = currentExpenses / people;
            currentExpenses -= reduce;
        }
        counter++;
        if (currentExpenses > budget) {
            let needed = Math.abs(currentExpenses - budget);
            console.log(`Not enough money to continue the trip. You need ${needed.toFixed(2)}$ more.`);
            break;
        }
    }

    if (budget >= currentExpenses) {
        let left = Math.abs(currentExpenses - budget);
        console.log(`You have reached the destination. You have ${left.toFixed(2)}$ budget left.`);
    }
}
first(['7', '12000', '5', '1.5', '10', '20', '512', '318', '202', '154', '222', '108', '123']);
//first(['10', '20500', '11', '1.2', '8', '13', '100', '150', '500', '400', '600', '130', '300', '350', '200', '300']);