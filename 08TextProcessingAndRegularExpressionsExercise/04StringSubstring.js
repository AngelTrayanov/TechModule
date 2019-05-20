function sub(searchWord, text) {
    text = text.toLowerCase().split(' ');
    let isTrue = false;
    for (let word of text) {
        if (word === searchWord) {
            console.log(word);
            isTrue = true;
            break;
        }
    }
    //console.log(isTrue ? searchWord : `${searchWord} not found!`)
    if (!isTrue) {
        console.log(`${searchWord} not found!`);
    }
}
sub('javascript',
'JavaScript is the best programming language');