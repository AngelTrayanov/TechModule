function solve(params) {
    for (let i = 0; i < params.length; i++) {
        let isTrue = false;
        if (params[i].includes('=')) {
            let tokensFirst = params[i].split('=');
            let name = tokensFirst[0];
            let [codeLength, code] = tokensFirst[1].split('<<');

            if (params[i] === 'Last note') {
                break;
            }
            if (name.match(/(^[A-Za-z!@#$?0-9]+$)/)) {
                if ((codeLength.match(/^([0-9]+)$/))) {
                    codeLength = Number(codeLength);
                    if (code.match(/.*/)) {
                        
                        if (codeLength === code.length) {
                            let toPrint = '';
                            for (let char of name) {
                                let numMatch = char.charCodeAt();
                                if ((numMatch >= 65 && numMatch <= 90) || (numMatch >= 97 && numMatch <= 122)) {
                                    toPrint += char;
                                }
                            }
                            console.log(`Coordinates found! ${toPrint} -> ${code}`);
                            isTrue = true;
                        }
                    }
                }
            }
        }
        if (!isTrue && i < params.length - 1) {
            console.log('Nothing found!');
        }
    }
}
// solve([

//     '!###Anna@pur@na##=16<<tv5dekdz8x11ddkc',
//     '!@Ma?na?sl!u@=7<<tv58ycb4845',
//     'E!ve?rest=.6<<tuvz26',
//     '!K@2.,##$=4<<tvnd',
//     '!Shiha@pan@gma##9<<tgfgegu67',

//     'Last note'
// ]);
solve(['Ka?!#nch@@en@ju##nga@=3<<thfbghvn',
    '=9Cho?@#Oyu<<thvb7ydht',
    'Nan??ga#Par!ba!t?=16<<twm03q2rx5hpmyr6',
    'Dhau??la#gi@ri?!#=3<<bvnfhrtiuy',
    'Last note'
]);