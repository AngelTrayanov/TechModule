function solve(param) {
    let keys = param[0].split('&').filter(e => (e.length === 16 || e.length === 25));
    let result = [];
    let keyPart = [];
    let currentKey = [];
    let counter = 1;
    let pattern = /(^[a-z|0-9]+$)/gi;
    let test;
    for (let key of keys) {
        if ((test = key.match(pattern)) !== null) {
            let keyArr = key.split('');
            if (keyArr.length === 16) {
                
                for (let i = 0; i < keyArr.length; i++) {
                    let current = keyArr[i];
                    let charCode = current.charCodeAt();
                    
                    if (charCode >47 && charCode<58) {
                        let num = Math.abs(+current - 9);
                        keyPart.push(num);
                    } else {
                        keyPart.push(current.toUpperCase());
                    }
                    
                    if (counter % 4 == 0) {
                        let part = keyPart.join('');
                        currentKey.push(part);
                        keyPart = [];
                        counter=0;
                    }
                    counter++;
                }
                result.push(currentKey);
                currentKey = [];
            } else {
                counter = 1;
                for (let i = 0; i < keyArr.length; i++) {
                    let current = keyArr[i];
                    let charCode = current.charCodeAt();
    
                    if (charCode >47 && charCode<58) {
                        let num = Math.abs(+current - 9);
                        keyPart.push(num);
                    } else {
                        keyPart.push(current.toUpperCase());
                    }
                    
                    if (counter % 5 == 0) {
                        let part = keyPart.join('');
                        currentKey.push(part);
                        keyPart = [];
                        counter=0;
                    }
                    counter++;
                    
                }
                result.push(currentKey);
                currentKey = [];
            }
            
        }
    }
    console.log(result.map(k=>k.join('-')).join(', '));
}

//solve(['xPt8VYhUDalilWLvb6uMSGEEf&KWQ{R.@/HZCbbV++1o]V+oG@@fF^93&y6fT5EGFgZHqlFiS&y6f!5EGFgZHqlFiS']);
solve([ 't1kjZU764zIME6Dl9ryD0g1U8&-P4*(`Q>:x8\\yE1{({X/Hoq!gR.&rg93bXgkmILW188m&KroGf1prUdxdA4ln&U3WH9kXPY0SncCfs' ]);