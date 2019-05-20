function solve(param) {
    let keys = param[0].split('&');
    let regex = /^([A-Za-z\d]{16})|([A-Za-z\d]{25})$/g;
    let validKeys = [];

    for (let key of keys) {
        if (key.match(regex)) {
            let validKey = key.toUpperCase().split('');

            for (let i = 0; i < validKey.length; i++) {

                if (Number.isInteger(+validKey[i])) {
                    validKey[i] = 9 - Number(validKey[i]);
                }

            }

            let chunkSize = validKey.length === 16 ? 4 : 5;
            validKey = validKey.join('').match(new RegExp(`.{${chunkSize}}`,'g')).join('-');
            validKeys.push(validKey);
        }
    }
    console.log(validKeys.join(', '));
}
solve(['xPt8VYhUDalilWLvb6uMSGEEf&KWQ{R.@/HZCbbV++1o]V+oG@@fF^93&y6fT5EGFgZHqlFiS']);
//solve([ 't1kjZU764zIME6Dl9ryD0g1U8&-P4*(`Q>:x8\\yE1{({X/Hoq!gR.&rg93bXgkmILW188m&KroGf1prUdxdA4ln&U3WH9kXPY0SncCfs' ]);