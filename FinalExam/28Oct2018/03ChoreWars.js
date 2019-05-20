function solve(params) {
    let dishes = /(<[a-z0-9]+>)/g;
    let cleaning = /(\[[A-Z0-9]+\])/g;
    let laundry = /({.+})/g;
    let chore = {
        'Doing the dishes': 0,
        'Cleaning the house': 0,
        'Doing the laundry': 0

    };
    let totalTime = 0;

    for (let param of params) {
        let result = '';
        let sum = 0;
        if (param.includes('wife is happy')) {
            break;
        }
        if (param.match(dishes)) {
            result = dishes.exec(param)[0];
            for (let char of result) {
                if (Number.isInteger(+char)) {
                    sum += +char;
                }
            }
            chore['Doing the dishes'] += sum;
        } else if (param.match(cleaning)) {
            result = cleaning.exec(param)[0];
            let line = result[0]
            for (let char of result) {
                if (Number.isInteger(+char)) {
                    sum += +char;
                }
            }
            chore['Cleaning the house'] += sum;
        } else if (param.match(laundry)) {
            result = laundry.exec(param)[0];
            for (let char of result) {
                if (Number.isInteger(+char)) {
                    sum += +char;
                }
            }
            chore['Doing the laundry'] += sum;
        }
        result = '';
        totalTime += sum;
    }
    let entries = Object.entries(chore).forEach(e => console.log(`${e[0]} - ${e[1]} min.`));
    console.log(`Total - ${totalTime} min.`);

}
solve([
    'Vo.|1zps {lo2a}zgVGk{1)N+',
    'Asdad123zxc{3]',
    'R[A [F67G9C]6e3C@',
    'MVo.|1zpshM<9) <d85ifkh59votu>@',
    '<dm0g2y34mw1kpds2>iD|"p',
    'wife is happy'

]);
// solve(['-^hr5a65j48<dd6f5h4dhfd>456sga_+',
//     'DHdhy4*3[T2HOU87KRC]sA/@',
//     'Sda%t]gf{%hjK8f34)!fG1re}-+htG%v',
//     'wife is happy',
//     ''
// ]);