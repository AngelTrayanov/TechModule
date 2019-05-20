function partee(input) {
    let rotation = input.indexOf('PARTY');
    let map = new Map();

    for (let i = 0; i < rotation; i++) {

        let guestList = input[i];
        map.set(guestList, 1);

    }

    for (let k = (rotation + 1); k < input.length; k++) {

        let incomming = input[k];
        if (map.has(incomming)) {
            map.delete(incomming);
        }

    }
    
    let guests = [...map.keys()];
    
    console.log(guests.length);
    let vipGuests = [];

    for (const iterator of guests) {
        if (iterator.charCodeAt(0) > 47 && iterator.charCodeAt(0) < 58) {
            vipGuests.push(iterator);
            let index = guests.indexOf(iterator);
            guests.splice(index, 1);
        }
    }
    let result = vipGuests.concat(guests);
    console.log(result.join('\n'));
}
partee(['m8rfQBvl',

    'fc1oZCE0',

    'UgffRkOn',

    '7ugX7bm0',

    '9CQBGUeJ',

    '2FQZT3uC',

    'dziNz78I',

    'mdSGyQCJ',

    'LjcVpmDL',

    'fPXNHpm1',

    'HTTbwRmM',

    'B5yTkMQi',

    '8N0FThqG',

    'xys2FYzn',

    'MDzcM9ZK',

    'PARTY',

    '2FQZT3uC',

    'dziNz78I',

    'mdSGyQCJ',

    'LjcVpmDL',

    'fPXNHpm1',

    'HTTbwRmM',

    'B5yTkMQi',

    '8N0FThqG',

    'm8rfQBvl',

    'fc1oZCE0',

    'UgffRkOn',

    '7ugX7bm0',

    '9CQBGUeJ'

])
partee(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'

]);