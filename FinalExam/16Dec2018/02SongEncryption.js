function solve(params) {
    let songPattern = /(^[A-Z\s]+$)/g;
    let artistPattern = /(^[A-Z][a-z\s\']+$)/g;
    for (let param of params) {
        if (param.includes('end')) {
            break;
        }
        let tokens = param.split(':');
        let artist = tokens[0];
        let song = tokens[1];
        let increment = artist.length;
        let isTrue = false;
        if (artist.match(artistPattern)) {
            if (song.match(songPattern)) {
                let changedArtist = '';
                let changedSong = '';
                for (let i = 0; i < artist.length; i++) {
                    let currentCharAsNum = artist[i].charCodeAt();
                    let checker = currentCharAsNum + increment;
                    if (i === 0) {
                        if (checker > 90) {
                            let diff = checker - 90;
                            currentCharAsNum = 64 + diff;
                        } else {
                            currentCharAsNum = checker;
                        }
                    } else {
                        if (currentCharAsNum !== 32 && currentCharAsNum !== 39) {
                            if (checker > 122) {
                                let diff = checker - 122;
                                currentCharAsNum = 96 + diff;
                            } else {
                                currentCharAsNum = checker;
                            }
                        }
                    }
                    let char = String.fromCharCode(currentCharAsNum);
                    changedArtist += char;
                }
                for (let i = 0; i < song.length; i++) {
                    let currentCharAsNum = song[i].charCodeAt();
                    let checker = currentCharAsNum + increment;
                    if (currentCharAsNum !== 32) {
                        if (checker > 90) {
                            let diff = checker - 90;
                            currentCharAsNum = 64 + diff;
                        } else {
                            currentCharAsNum = checker;
                        }
                    }
                    let char = String.fromCharCode(currentCharAsNum);
                    changedSong += char;
                }
                console.log(`Successful encryption: ${changedArtist}@${changedSong}`);
                isTrue = true;
            }
        }
        if (!isTrue) {
            console.log('Invalid input!');
        }
    }
}

// solve(['Eminem:VENOM',
//     'Linkin park:NUMB',
//     'Drake:NONSTOP',
//     'Adele:HELLO',
//     'end'
// ]);
solve(['Michael Jackson:ANOTHER PART OF ME',
    'Adele:ONE AND ONLY',
    'Guns n\'roses:NOVEMBER RAIN',
    'end',
    'Guns n\'roses:NOVEMBER RAIn',
    'Guns n\'roses:NOVeMBER RAIn',
    'Christina Aguilera: HuRt'
    
]);