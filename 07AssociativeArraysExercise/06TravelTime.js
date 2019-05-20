function travelTime(input) {
    let countries = new Map();
    for (let string of input) {
        let parts = string.split(' > ');

        let [country, town, price] = parts;

        if (!countries.has(country)) {
            let townsToPriceMap = new Map();
            townsToPriceMap.set(town, price);
            countries.set(country, townsToPriceMap);
        } else {
            let existingTowns = countries.get(country);

            if (existingTowns.has(town)) {
                let existingPrice = existingTowns.get(town);
                if (existingPrice > price) {
                    existingTowns.set(town, price);
                }
            } else {
                existingTowns.set(town, price);
            }
        }
    }
    
    let sortedCountries = [...countries].sort((a,b)=>a[0].localeCompare(b[0]));
    
    for (let [country, townsMap] of sortedCountries) {
        let sortedTowns =[...townsMap].sort((a,b)=>a[1]-b[1]).map(e=>`${e[0]} -> ${e[1]}`);
        console.log(`${country} -> ${sortedTowns.join(' ')}`);
    }

}
travelTime(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);