function solve(searchWords, sentence) {
    let wordsArr = searchWords.split(', ');
    let sentenceArr = sentence.split(' ');
    for (let i = 0; i < wordsArr.length; i++) {
        for (let j = 0; j < sentenceArr.length; j++) {
            
            if ((wordsArr[i].length) == (sentenceArr[j].length)) {
                if (sentenceArr[j].includes('*')) {
                    let index = sentenceArr.indexOf(sentenceArr[j]);
                    sentenceArr.splice(index, 1, wordsArr[i]);
                }
            }
        }
    }
    console.log(sentenceArr.join(' '));
}
solve('great',
    'softuni is ***** place for learning new programming languages');
solve('great, learning',
    'softuni is ***** place for ******** new programming languages');