function steamAccount(commands) {

    let installedGames = commands.shift().split(' ');
    commands.pop();

    for (let command of commands) {
        command = command.split(' ');
        let action = command[0];
        let game = command[1];

        switch (action) {
            // If you receive Install command, you should add the game at last position in the account, 
            //but only if it isn't installed already.
            case 'Install':
                if (!installedGames.includes(game)) {
                    installedGames.push(game);
                }
                break;
            // If you receive Uninstall command, delete the game if it exists.
            case 'Uninstall':
                if (installedGames.includes(game)) {
                    let uninstallIndex = installedGames.indexOf(game);
                    installedGames.splice(uninstallIndex, 1);
                }
                break;
            // If you receive Update command, you should update the game if it exists
            // and place it on last position.
            case 'Update':
            if (installedGames.includes(game)) {
                let updateIndex = installedGames.indexOf(game);
                installedGames.splice(updateIndex, 1);
                installedGames.push(game);
            }
                break;
            // If you receive Expansion command, you should check if the game exists
            // and insert after it the expansion in the following format: "{game}:{expansion}";
            case 'Expansion':
                game = game.split('-');
                let expansionGame = game[0];
                let nameOfExpansion = game[1];
                if (installedGames.includes(expansionGame)) {
                    let expansionIndex = installedGames.indexOf(expansionGame) + 1;
                    installedGames.splice(expansionIndex, 0, `${expansionGame}:${nameOfExpansion}`);
                }
                break;
        }
    }
    console.log(installedGames.join(' '));
}
steamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
//steamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);