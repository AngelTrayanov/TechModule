function solve(param) {
    let [firstPart, secondPart, thirdPart] = param[0].split('|');
    let ascii = firstPart
    .match(/([#$%*&])([A-Z]+)(\1)/)[2]
    .split('')
    .map(c=>c.charCodeAt(0));

    ascii.forEach(m=>{
        let length = secondPart.match(new RegExp(`${m}:([0-9]{2})`));
        length = Number(length[1]);
        let match = thirdPart.match(new RegExp(`(^|\\s)(${String.fromCharCode(m)}.{${length}})($|\\s)`));
        console.log(match[0]);
    });
}

solve([ `sdsGGasAOTPWEEEdas$AOTP$|a65:11.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos` ]);
//solve(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig']);