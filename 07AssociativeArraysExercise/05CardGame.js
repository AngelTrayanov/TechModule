function homeGame(input) {
    let powers = {
        '2' : 2, '3' : 3, '4' : 4, '5' : 5,
        '6' : 6, '7' : 7, '8' : 8, '9' : 9, '10' : 10,
        'J' : 11, 'Q' : 12, 'K' : 13, 'A' : 14
    };
    let multipliers = {
        'S' : 4, 'H' : 3, 'D' : 2, 'C' : 1
    };
    let map = new Map();
    let result = 0;
    for (let i = 0; i < input.length; i++) {
        let arr = [];
        let current = input[i].split(': ');
        let name = current.shift();
        let cards = current.slice(0)[0].split(', ');
        if (!map.has(name)) {
            map.set(name, cards);
        } else {
            let currentCards = map.get(name).concat(cards);
            map.set(name, currentCards);
        }
        
    }
    for (let [key, value] of map) {
        let filterCards = map.get(key);
        filterCards = filterCards.filter((e,i,arr)=>i===arr.indexOf(e));
        map.set(key, filterCards);
    }
    for (let [key, value] of map) {
        for (let i = 0; i < value.length; i++) {
            let current = value[i];
            let p = current.slice(0, current.length - 1);
            let m = current.slice(current.length - 1);
            let currentScore = powers[p] * multipliers[m];
            result += currentScore;
        }
        map.set(key, result);
        result = 0;
    }
    map.forEach((v,k)=>console.log(`${k}: ${v}`));
}
homeGame(['Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);