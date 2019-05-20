function solve(input) {
    let firstPattern = /#[a-zA-z]+/g;
    let words = [];
    
    while ((current = firstPattern.exec(input)) != null) {
        words.push(current[0].slice(1));
    }
    
    console.log(words.join('\n'));
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia #SocialMedia'); //special \n socialMedia