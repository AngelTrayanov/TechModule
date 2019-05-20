function steamAccount(arr) {
    let games = Array.from(arr[0].split(' '));
    arr.pop();

    let commands = Array.from(arr.slice(1));

    for (let i = 0; i < commands.length; i++) {
        let currentGame = commands[i].split(' ');
        let gameCommand = currentGame[0];
        let gameName = currentGame[1];

        switch (gameCommand) {
            case 'Install':
                if (games.indexOf(gameName) < 0) {
                    games.push(gameName);
                }
                break;
            case 'Uninstall':
                if (games.indexOf(gameName) >= 0) {
                    games.splice(games.indexOf(gameName), 1);
                }
                break;
            case 'Update':
                if (games.indexOf(gameName) >= 0) {
                    let goingLast = games.splice(games.indexOf(gameName), 1);
                    games.push(goingLast);
                }
                break;
            case 'Expansion':
                gameName = gameName.split('-');
                let expansionGame = gameName[0];
                let nameOfExpansion = gameName[1];
                if (games.includes(expansionGame)) {
                    let expansionIndex = games.indexOf(expansionGame)+1;
                    console.log(expansionIndex);
                    games.splice(expansionIndex, 0, `${expansionGame}:${nameOfExpansion}`)
                }
                break;
        }
    }

    console.log(games.join(' '));
}

steamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
// steamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);
//steamAccount([ '', 'Play!']);