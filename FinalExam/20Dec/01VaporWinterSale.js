function solve(input) {
    let obj = {}
    let gamesWithDLC = input[0].split(', ').filter(g=>g.includes(':'));
    let onlyGames = input[0].split(', ').filter(g=>g.includes('-'));
    for(let element of onlyGames){
        let tokens = element.split('-');
        let game = tokens[0];
        let price = tokens[1];
        obj[game]= price;
        
    }
    for(let element of gamesWithDLC) {
        let tokens = element.split(':');
        let game = tokens[0];
        if (obj.hasOwnProperty(game)) {
            let currentPrice = +obj[game];
            currentPrice += Number(currentPrice * 0.2);
            delete obj[game];
            obj[element] = currentPrice;
        }
        
    }
    let entries = Object.entries(obj);
    for(let element of entries){
        if (element[0].includes(':')) {
            let currentPrice = element.pop();
            currentPrice = currentPrice / 2;
            element.push(currentPrice);
        } else {
            let currentPrice = element.pop();
            currentPrice -= (currentPrice * 0.2);
            element.push(currentPrice);
        }
    }
    let filteredWithDLC = entries.filter(e=>e[0].includes(':')).sort((a,b)=>a[1]-b[1]);
    let filteredWithoutDLC = entries.filter(e=>!e[0].includes(':')).sort((a,b)=>b[1]-a[1]);
    for (let element of filteredWithDLC) {
        let tokens = element[0].split(':');
        let finalGame = tokens[0];
        let finalDLC = tokens[1];
        let finalPrice = +element[1];

        console.log(`${finalGame} - ${finalDLC} - ${finalPrice.toFixed(2)}`);

    }
    for(let element of filteredWithoutDLC) {
        let noDLCGame = element[0];
        let noDLCPrice = +element[1];
        console.log(`${noDLCGame} - ${noDLCPrice.toFixed(2)}`);
    }
    
}

solve([ 'WitHer 3-50, FullLife 3-60, WitHer 3:Blood and Beer, Cyberfunk 2077-120, League of Leg Ends-10, League of Leg Ends:DoaT' ]);
solve(['Center Strike-14.99, FortLite-25, BattleShield 5-64.74, BattleShield 5:CoD edition, Dog of War-45, Dead Red Redemption-100, Dead Red Redemption:no DLC']);