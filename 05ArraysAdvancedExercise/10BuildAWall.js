function buildWall(sections) {
    sections = sections.map(Number);
    let result = [];
    let sum = 0;
    let pesosPerQubicFeet = 1900;
    let finalPrice = 0;
    while (sections.length > 0) {
        sum = 0;
        for (let i = 0; i < sections.length; i++) {
            if (sections[i] < 30) {
                sum += 195;
                sections[i] += 1;
            } else {
                sections.splice(i, 1);
                i--;
            }
        }
        if (sum !== 0) {
            result.push(sum);
        }
    }
    let totalQubicFeet = result.reduce((a,b) => a+b);
    finalPrice = totalQubicFeet * pesosPerQubicFeet;
    console.log(result.join(', '));
    console.log(`${finalPrice} pesos`);
}
buildWall(['17', '22', '17', '19', '17']);