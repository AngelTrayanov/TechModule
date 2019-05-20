function solve(params) {
    let result = {};
    for(let param of params){
        let [command, store, items] = param.split('->');
        if (command === 'END') {
            break;
        }
        if (command === 'Add') {
            if (!result.hasOwnProperty(store)) {
                result[store] = items.split(',');
            } else {
                let toAdd = items.split(',');
                for(let add of toAdd){
                    result[store].push(add);
                }
            }
        } else if (command === 'Remove') {
            if (result.hasOwnProperty(store)) {
                delete result[store];
            }
        }
    }
    console.log('Stores list:');
    let entries = Object.entries(result)
    .sort((b,a)=>{
        return a[1].length - b[1].length || a[0].localeCompare(b[0])
    });
    for( let entrie of entries){
        console.log(entrie[0]);
        let itemToPrint = entrie[1];
        for(let item of itemToPrint){
            console.log(`<<${item}>>`);
        }
    }
}

// solve([ 'Add->PeakSports->Map,Navigation,Compass',
// 'Add->Paragon->Sunscreen',
// 'Add->Groceries->Dried-fruit,Nuts',
// 'Add->Groceries->Nuts',
// 'Add->Paragon->Tent',
// 'Remove->Paragon',
// 'Add->Pharmacy->Pain-killers',
// 'END' ]
// );
solve([ 'Add->Peak->Waterproof,Umbrella',
'Add->Groceries->Water,Juice,Food',
'Add->Peak->Tent',
'Add->Peak->Sleeping-Bag',
'Add->Peak->Jacket',
'Add->Groceries->Lighter',
'Remove->Groceries',
'Remove->Store',
'END' ]);