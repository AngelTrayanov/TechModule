function solve(input) {

    let arr = input[0].split('|');
    let energy = 100;
    let coins = 100;

    for (let i = 0; i < arr.length; i++) {

        let currentElement = arr[i].split('-');
        let command = currentElement[0];
        let amount = +currentElement[1];

        if (command == 'rest') {
            energy += amount;
            if (energy > 100) {
                let healed = energy - 100;
                let healedFor = amount - healed;
                console.log(`You gained ${healedFor} energy.`);
                energy = 100;
            } else {
                console.log(`You gained ${amount} energy.`);
            }
            console.log(`Current energy: ${energy}.`);
        } else if (command == 'order') {
            coins += amount;
            energy -= 30;
            if (energy >= 0) {
                console.log(`You earned ${amount} coins.`);
            } else {
                console.log(`You had to rest!`);
                coins -= amount;
                energy += 80;
                if (energy > 100) {
                    energy = 100;
                }
            }
        } else {
            coins -= amount;
            if (coins > 0) {
                console.log(`You bought ${command}.`);
            } else {
                console.log(`Closed! Cannot afford ${command}.`);
                return;
            }
        }

        if (i == arr.length - 1) {
            console.log('Day completed!');
            console.log(`Coins: ${coins}`);
            console.log(`Energy: ${energy}`);
        }
    }
}
solve(['rest-2|order-10|eggs-100|rest-10']);
//solve(['order-10|order-10|order-10|flour-100|order-100|oven-100|order-1000']);