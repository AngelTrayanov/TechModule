function users(input) {
    let ourMap = new Map();
    for (let user of input) {
        let obj = [];
        user = user.split(' -> ');
        let [company,employee] = user;
        
        if (!ourMap.has(company)) {
            obj.push(employee);
            ourMap.set(company, obj);
        } else {
            let add = ourMap.get(company);
            if (!add.includes(employee)) {
                add.push(employee);
                ourMap.set(company, add);
            }
        }
    }
    let sorted = [...ourMap].sort((a,b)=>a[0].localeCompare(b[0]));
    for (let [key, value] of sorted) {
        console.log(`${key}`);
        for (let i = 0; i < value.length; i++) {
            
            console.log(`-- ${value[i]}`);
            
        }
    }
}
users(['SoftUni -> AA12345',
'SoftUni -> CC12344',
'Lenovo -> XX23456',
'SoftUni -> AA12345',
'Movement -> DD11111'
]);
// users(['SoftUni -> AA12345',
// 'SoftUni -> AA12345',
//     'SoftUni -> BB12345',
//     'Microsoft -> CC12345',
//     'HP -> BB12345'
// ]);