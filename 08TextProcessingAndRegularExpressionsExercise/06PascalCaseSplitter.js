function solve(str) {
    let splitedWords = str.match(/[A-Z][a-z]*/g);
    console.log(splitedWords.join(', '));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('ThisIsSoAnnoyingToDo');