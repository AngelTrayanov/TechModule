function solve(params) {
    let substraction = params.shift();
    params.pop();
    let encryptedLines = [];
    for(let param of params){
        let encryptedLine = '';
        for (let i = 0; i < param.length; i++) {
            let charValue = param[i].charCodeAt();
            charValue -= substraction;
            charValue = String.fromCharCode(charValue);
            encryptedLine += charValue;
        }
        encryptedLines.push(encryptedLine);
    }
    
    let prattern = /(@[A-Za-z]+)[^@|\-|!|:|>]+(![G]!)/g;
    encryptedLines = encryptedLines.filter(e=>e.match(prattern));
    
    for(let line of encryptedLines){
        let goodKid = '';
        let index = line.indexOf('@');
        for (let i = index + 1; i < line.length; i++) {
            let checker = line[i].charCodeAt();
            if ((checker > 64 && checker < 91) || (checker > 96 && checker < 123)) {
                goodKid += line[i];
            } else {
                console.log(goodKid);
                break;
            }
        }
    }
}

solve(['3',
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejn$J$',
    'CVwdq&gnmjkvng$Q$',
    'end'
]);
solve(['4',
    '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
    '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
    ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
    'Wonvfkmwzkmpwvzkm\'lhjnlDWeqerxle0wlnzj{nz%K%nohwn',
    'DReh}e=<4lhzj1%K%',
    'end'
]);
solve([ '3',
'N}eideidmk$\'(mnyenmCNlpamnin$J$',
'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
'ppqmkkkmnolmnnCEhq/vkievk$Q$',
'yyegiivoguCYdohqwlqh/kguimhk$J$',
'end' ])