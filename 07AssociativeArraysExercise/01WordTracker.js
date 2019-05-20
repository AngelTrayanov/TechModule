function wordTracker(input) {
    let map = new Map();
    let wantedWords = input.shift().split(' ');
    let sentence = input.slice(0);

    for (let i = 0; i < wantedWords.length; i++) {
        map.set((wantedWords[i]), 0);
        for (let k = 0; k < sentence.length; k++) {
            if (map.has(sentence[k]) && sentence[k] == (wantedWords[i])) {

                let previus = map.get(sentence[k]);
                let current = (+previus) + 1;
                map.set(sentence[k], current);

            }
        }
    }
    let result = [...map.entries()].sort((a, b) => b[1] - a[1]).forEach(e => console.log(`${e[0]} - ${e[1]}`));
}
wordTracker(['this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);