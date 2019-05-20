function towns(params) {
    let towns = [];
    
    for (let i = 1; i < params.length; i++) {
        
        let tokens = params[i].split('|').filter(x=>x!=='');
        let town = tokens[0].trim(' ');
        let latitude = +((+tokens[1]).toFixed(2));
        let longitude = +((+tokens[2]).toFixed(2));
        
        towns.push({
            Town:town,
            Latitude:latitude,
            Longitude:longitude
        })
    }

    console.log(JSON.stringify(towns));
}
towns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);