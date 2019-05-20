function solve(params) {
    let result = {};

    for(let param of params){
        if (param === 'Slide rule') {
            break;
        }
        let mainTokens = param.split(':');
        let town = mainTokens[0];
        let [one, two] = mainTokens[1].split('->');
        if (one !== 'ambush') {
            if (!result.hasOwnProperty(town)) {
                result[town] = {
                    time: +one,
                    passengers: +two
                }
            } 
            else {
                let checked = Number(result[town].time);
                let checker = +one;
                if (checker < checked) {
                    result[town].time = checker;
                    result[town].passengers += +two;
                } else {
                    if (checked <= 0) {
                        result[town].time = checker;
                    }
                    result[town].passengers += +two;
                }
            }
        } else{
            if (result.hasOwnProperty(town)) {
                result[town].time = 0;
                result[town].passengers -= two;
            }
        }
    }
    let entries = Object.entries(result)
    .filter(e=> (e[1].time !== 0) && (e[1].passengers > 0))
    .sort((a,b)=>{
        return a[1].time - b[1].time || a[0].localeCompare(b[0])
    })
    .forEach(e=>console.log(`${e[0]} -> Time: ${e[1].time} -> Passengers: ${e[1].passengers}`));
}

// solve([ 'Sto-Lat:8->120',
// 'Ankh-Morpork:3->143',
// 'Sto-Lat:9->80',
// 'Ankh-Morpork:4->143',
// 'Sto-Lat:3->20',
// 'Quirm:12->40',
// 'Quirm:13->29',
// 'Q:13->29',
// 'Q:ambush->29',
// 'Slide rule' ]);
solve([ 'Quirm:12->258',
'Ankh-Morpork:ambush->200',
'Ankh-Morpork:3->143',
'Sto-Lat:4->80',
'Ankh-Morpork:4->143',
'Ankh-Morpork:ambush->143',
'Sto-Lat:3->20',
'Ankh-Morpork:5->17',
'Slide rule' ]);

