function emot(input) {
    let result = [];
    input.split(' ').forEach(e=>{
        if (e.length === 2 && e.startsWith(':')) {
            result.push(e);
        }
    });
    console.log(result.join('\n'));
}
emot('There are so many emoticons nowadays :P I have many ideas :O what input to place here :)');