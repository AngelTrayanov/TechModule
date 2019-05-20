function solve([encryptedString, subStrings]) {
    let pattern = /^[d-z{}|#]+$/g;
    if (!encryptedString.match(pattern)) {
        console.log('This is not the book you are looking for.');
    } else {
        let[firstSubString, secondSubString] = subStrings.split(' ');
        let decryptedString = encryptedString
            .split('')
            .map(char=>String.fromCharCode(char.charCodeAt(0)-3))
            .join('')
            .replace(new RegExp(firstSubString, 'g'), secondSubString);
            console.log(decryptedString);
    }
}
solve(['wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw',
    'ec an'
]);
solve(['arx#vkdww#qrw#sdvv', 't l']);