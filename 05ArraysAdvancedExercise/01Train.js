
function solve(wagons) {
    let passangersInWagons = wagons
    .shift()
    .split(' ')
    .map(Number);
    let maxWagonCapacity = Number(wagons.shift());

    for (let commands of wagons) {
        let currentCommand = commands.split(' ');
        if (currentCommand[0] === 'Add') {
            passangersInWagons.push(+currentCommand[1]);
        } else {
            for (let i = 0; i < passangersInWagons.length; i++) {
                if (passangersInWagons[i]+ (+currentCommand[0]) <= maxWagonCapacity) {
                    passangersInWagons[i] += (+currentCommand[0]);
                    break;
                }
            }
        }
    }
console.log(passangersInWagons.join(' '));
}
//solve(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
solve(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']);