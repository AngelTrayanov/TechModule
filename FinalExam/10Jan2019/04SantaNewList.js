function solve(params) {
    params.pop();
    let gifts = {};
    let kids = {};
    
    for(let param of params){
        let tokens = param.split('->');
        let name;
        if (!tokens.includes('Remove')) {
            name = tokens[0];
            let gift = tokens[1];
            let quantity = +tokens[2];
            if (!kids.hasOwnProperty(name)) {
                kids[name] = quantity;
            } else {
                kids[name] += quantity;
            }
            if (!gifts.hasOwnProperty(gift)) {
                gifts[gift] = quantity;
            } else {
                gifts[gift] += quantity;
            }
        } else {
            name = tokens[1];
            delete kids[name];
        }
    }

    console.log('Children:');
    let filteredKids = Object.entries(kids).sort(sortKids).forEach(e=>console.log(`${e[0]} -> ${e[1]}`));
   
    function sortKids(a,b) {
        let result = b[1] - a[1];
        if (result === 0) {
            result = a[0].localeCompare(b[0]);
        }
        return result
    }
    console.log('Presents:');
    let entries = Object.entries(gifts).forEach(e=>console.log(`${e[0]} -> ${e[1]}`));

}

solve([ 'Sammy->Candy->12',
'Annie->Candy->12',
'Dannie->Candy->12',
'END' ]);
// solve([ 'Marty->Toys->5',
// 'Sam->Candy->20',
// 'Leo->Candy->10',
// 'Leo->Toys->1',
// 'Katy->Clothes->4',
// 'Bobbie->Clothes->6',
// 'Tanya->Phone->1',
// 'Nasko->Tablet->3',
// 'END' ]);
// solve([ 'Teddy->Clothes->8',
// 'Johny->Toys->10',
// 'Freddie->Candy->30',
// 'Johny->Candy->20',
// 'Carrie->Phone->1',
// 'Carrie->Tablet->1',
// 'Carrie->Candy->10',
// 'Teddy->Toys->5',
// 'Remove->Teddy',
// 'END' ]);