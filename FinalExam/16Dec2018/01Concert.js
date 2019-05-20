function solve(param) {
    let bandsArr = param.slice();
    let bandToPrint = bandsArr.pop();
    let start = bandsArr.pop();
    let bands = {};
    let totalTime = 0;

    for (let band of bandsArr) {

        let tokens = band.split('; ');
        let command = tokens[0];
        let currentBand = tokens[1];
        let actions = tokens[2].split(', ');

        if (command === 'Add') {
            if (!bands[currentBand]) {
                bands[currentBand] = {
                    members: actions,
                    time: 0
                }
            } else {
                for (let member of actions) {
                    if (!bands[currentBand].members.includes(member)) {
                        bands[currentBand].members.push(member);
                    }
                }
            }
        } else if (command === 'Play') {
            if (!bands[currentBand]) {
                bands[currentBand] = {
                    members: [],
                    time: 0
                }
            }
            bands[currentBand].time += +(actions);
            totalTime += +(actions);
        }
    }
    function sorting(a,b) {
        let result = b[1].time - a[1].time; // return b[1].time - a[1].time || a[0].localeCompare(b[0])
        if(result === 0){
            result = a[0].localeCompare(b[0]);
        }
        return result
    }
    console.log('Total time: ' + totalTime);
    let filteredByTime = Object
        .entries(bands)
        .sort(sorting)
        .forEach(b => console.log(`${b[0]} -> ${b[1].time}`));
    let bandPrint = Object
        .entries(bands)
        .filter(b=>b[0] === bandToPrint);
    console.log(`${bandPrint[0][0]}`);
    bandPrint[0][1].members.forEach(m=>console.log('=> ' + m));
}

solve(['Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
    'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
    'Play; Eagles; 1869',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
    'Play; The Rolling Stones; 4239',
    'start of concert',
    'The Rolling Stones'
]);
// solve([ 'Add; The Beatles; John Lennon, Paul McCartney',
// 'Add; The Beatles; Paul McCartney, George Harrison',
// 'Add; The Beatles; George Harrison, Ringo Starr',
// 'Play; The Beatles; 3698',
// 'Play; The Beatles; 3828',
// 'Play; The Beat; 3698',
// 'Play; The Beat; 3828',
// 'start of concert',
// 'The Beatles' ]);