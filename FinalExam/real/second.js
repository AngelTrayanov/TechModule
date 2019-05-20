function solve(params) {
    let pattern = /([A-Za-z!@#$?0-9]+)=([0-9]+)<<(.+)$/;

    for (let param of params) {
        let isTrue = true;
        if (param === 'Last note') {
            break;
        }
        if (param.match(pattern)) {
            let splited = param.match(/([A-Za-z!@#$?0-9]+)/g);
            let peak = splited[0];
            let lengthOfGeohashcode = Number(splited[1]);
            let geohashcode = splited[2];
            if (lengthOfGeohashcode === geohashcode.length) {
                let toPrint = '';
                for (let char of peak) {
                    let numMatch = char.charCodeAt();
                    if ((numMatch >= 65 && numMatch <= 90) || (numMatch >= 97 && numMatch <= 122)) {
                        toPrint += char;
                    }
                }
                console.log(`Coordinates found! ${toPrint} -> ${geohashcode}`);
            } else {
                isTrue = false;
            }
        } else {
            isTrue = false;
        }
        if (!isTrue) {
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
solve([ 'Ka?!#nch@@en@ju##nga@=3<<thfbghvn',
'=9Cho?@#Oyu<<thvb7ydht',
'Nan??ga#Par!ba!t?=16<<twm03q2rx5hpmyr6',
'Dhau??la#gi@ri?!#=3<<bvnfhrtiuy',
'Last note' ]);