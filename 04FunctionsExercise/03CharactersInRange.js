function charsInRange(startChar, endChar) {
    let start = startChar.charCodeAt(0);
    let end = endChar.charCodeAt(0);
    let middle;
    if (start > end) {
        middle = start;
        start = end;
        end = middle;
    }
    let charsInRange = [];
    for (let i = start+1; i < end; i++) {
        charsInRange.push(String.fromCharCode(i));
    }
    console.log(charsInRange.join(' '));
}
charsInRange('C','#');