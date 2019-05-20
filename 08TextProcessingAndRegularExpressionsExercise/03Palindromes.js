function AliPali(arr) {
    let palindromes = [];
    for (let element of arr) {
        let normal = element.split(' ').join('');
        let reversed = normal.split('').reverse().join('');
        if (normal === reversed) {
            palindromes.push(normal);
        }
    }
    if (palindromes.length > 0) {
        console.log(palindromes.join(', '));
    } else {
        console.log('No palindromes found');
    }
}
AliPali([' stella won no wallets',
    'not a palindrome',' stella won no wallets'
]);