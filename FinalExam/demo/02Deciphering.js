    function solve(params) {
        let encryptedText = params[0];
        let subStrings = params[1].split(' ');
        let subFind = subStrings[0];
        let subReplace = subStrings[1];
        let passedPatternTexts = [];
        let result = [];
        let currentWord = '';
        let isTrue = false;
        let pattern = /(^[d-z}|#{]+)/g;
        if (pattern.test(encryptedText)) {

            passedPatternTexts.push(encryptedText);

        } else {
            console.log('This is not the book you are looking for.');
            isTrue = true;
        }

        if (!isTrue) {
            for (let text of passedPatternTexts) {
                for (let i = 0; i < text.length; i++) {

                    let currentNumber = text[i].charCodeAt() - 3;
                    let currentChar = String.fromCharCode(currentNumber);
                    currentWord += currentChar;

                }
                result.push(currentWord);
                currentWord = '';
            }
            let textResult = result[0].split(' ');
            let finalResult = [];
            for (let word of textResult) {
                let newWord = word.replace(subFind, subReplace);
                finalResult.push(newWord);
            }
            console.log(finalResult.join(' '));
        }

    }

    solve(['wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw',
        'ec an'
    ]);
    solve(['arx#vkdww#qrw#sdvv', 't l']);