function houseParty(commands) {
    let guestsArray = [];
    for (let command of commands) {
        let name = command.split(' ')[0];

        if (!command.includes('not')) {
            if (!guestsArray.includes(name)) {
                guestsArray.push(name);
            } else if (guestsArray.includes(name)) {
                console.log(`${name} is already in the list!`);
            }
        } else if (command.includes('not')){
            if (guestsArray.includes(name)) {
                let index = guestsArray.indexOf(name);
                guestsArray.splice(index,1);
            } else if (!guestsArray.includes(name)){
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(guestsArray.join('\n'));//foreach
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);