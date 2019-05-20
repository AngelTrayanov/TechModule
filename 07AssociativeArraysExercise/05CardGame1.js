function solve(params) {
    let powers = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    };
    let multipliers = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    };

    function getCardsValue(card) {
        let p = card.slice(0, card.length - 1);
        let m = card.slice(card.length - 1);
        return powers[p] * multipliers[m];
    }
    let players = {};
    for (let param of params) {
        let tokens = param.split(': ');
        let playerName = tokens[0];
        let cards = tokens[1].split(', ').map(c=>getCardsValue(c));
        if (!players.hasOwnProperty(playerName)) {
            players[playerName] = [];
        }
        players[playerName] = players[playerName]
        .concat(cards)
        .filter((card,index,deck)=>index===deck.indexOf(card));
    }
    for ( let player in players){
        let total = players[player].reduce((a,b)=>a+b);
        console.log(`${player}: ${total}`);
    }
}
solve(['Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);