function shortestAndLongestWord(arr) {
    let input = arr.split(' ').join(',').split(',').join('?').split('?').join('.').split('.').filter(x => x != '');
    let shortestWord = '';
    let longestWord = '';
    for (let i = 0; i < input.length; i++) {
        let currentWord = input[i];
        if (currentWord.length > longestWord.length) {
           longestWord  = currentWord;
        }
        if (i === 0) {
            shortestWord  = currentWord;
        }
        if (currentWord.length < shortestWord.length) {
           shortestWord  = currentWord;
        }
    }
    console.log(`Longest -> ${longestWord}`);
    console.log(`Shortest -> ${shortestWord}`);
}
//shortestAndLongestWord('Hello people, are you familiar with the terms of application at the software university?');
shortestAndLongestWord('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');