function solve(params) {
    let password = (params[0] + params[1]).split('');
    let word = params[2].toUpperCase().split('');
    let counter = 0;

    for (let symbol of password) {
        if (symbol === 'a' || symbol === 'e' ||
            symbol === 'i' || symbol === 'o' || symbol === 'u') {

            let replacement = word[counter];
            let index = password.indexOf(symbol);
            password.splice(index, 1, replacement);
            
            if (counter === word.length - 1) {
                counter = 0;
            } else{
                counter++;
            }
        }
    }
    let result = password.reverse();
    console.log(`Your generated password is ${result.join('')}`);
}

solve(['ilovepizza', 'ihatevegetables', 'orange']);