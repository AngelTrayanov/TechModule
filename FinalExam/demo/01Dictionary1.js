function solve([wordsWithDefinitions, wordsToCheck, command]) {
    let dictionary = {};

    wordsWithDefinitions
        .split(' | ')
        .map(e => e.split(': '))
        .forEach(([word, definition]) => {
            if (!dictionary.hasOwnProperty(word)) {
                dictionary[word] = [];
            }
            dictionary[word].push(definition);
        });

    wordsToCheck.split(' | ').forEach(word => {
        if (dictionary.hasOwnProperty(word)) {
            console.log(word);
            dictionary[word]
                .sort((a, b) => b.length - a.length)
                .forEach(def => {
                    console.log(` -${def}`);
                })
        }
    })

    if (command === 'List') {
        console.log(
            Object.keys(dictionary).sort((a, b) => a.localeCompare(b)).join(' ')
        );
    }

}

// solve(['programmer: an animal, which turns coffee into code | developer: a magician',
//     'Pesho | Gosho',
//     'List'
// ]);
solve(['tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance',
    'bit | code | tackle',
    'List'
]);