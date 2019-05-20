function dark(input) {
    
    arr = input[0].split('|');
    let health = 100;
    let coins = 0;
    let counter = 1;

    for (let i = 0; i < arr.length; i++) {

        let command = arr[i].split(' ');
        let current = command[0];
        let amount = +command[1];

        if (current == 'potion') {
            health += amount;
                if (health > 100) {
                    let healed = health - 100;
                    let healedFor = Math.abs(amount - healed);
                    console.log(`You healed for ${healedFor} hp.`);
                    health = 100;
                } else {
                    console.log(`You healed for ${amount} hp.`);
                }
                console.log(`Current health: ${health} hp.`);
        } else if (current == 'chest') {
            coins += amount;
                console.log(`You found ${amount} coins.`);
        } else {
            health -= amount;
            if (health > 0) {
                console.log(`You slayed ${current}.`);
            } else {
                console.log(`You died! Killed by ${current}.`);
                console.log(`Best room: ${counter}`);
                return;
            }
        }
       
        counter++;

        if (i == arr.length -1) {
            console.log("You've made it!");
            console.log(`Coins: ${coins}`);
            console.log(`Health: ${health}`);
        }

    }
}
//dark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);
dark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);