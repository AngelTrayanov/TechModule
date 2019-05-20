function solve(params) {
    let dictionary = {};
    let inputAsArray = params.slice();
    let finalCommand = inputAsArray.pop(); //string
    for (let i = 0; i < inputAsArray.length; i++) {
        let line = inputAsArray[i].split(' | ');
        for (let element of line) {

            if (element.includes(': ')) {
                let tokens = element.split(': ');
                let word = tokens[0];
                let definition = tokens[1].trim();
                if (!dictionary.hasOwnProperty(word)) {
                    dictionary[word] = [definition];
                } else {
                    let currentDict = dictionary[word];
                    currentDict.push(definition);
                    dictionary[word] = currentDict;
                }
                definition = '';
            }
        }
    }
    if (finalCommand == 'List') {
        let keys = Object.keys(dictionary).sort((a, b) => a.localeCompare(b));
        console.log(keys.join(' '));
    } else if (finalCommand == 'End') {
        let keys = Object.keys(dictionary).sort((a, b) => a.localeCompare(b)).filter(x=>x!=='');

        for (let key of keys) {
            console.log(key);
            let definitions = dictionary[key];
            definitions
                .sort((a, b) => b.length - a.length)
                .forEach(e => console.log(' -' + e));
            
        }
    }
}

solve(['programmer: an animal, which turns coffee into code | developer: a magician',
    'Pesho | Gosho',
    'End'
]);
// solve(['tackle: the equipment required for a task or sport | : write code for a computer program | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance',
//     'bit | code | tackle',
//     'End'
// ]);