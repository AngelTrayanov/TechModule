function piccolo(arr) {
    let mySet = new Set();

    for (let element of arr) {
        let [direction, number] = element.split(', ');

        if (direction === 'IN') {
            mySet.add(number);
        }
        if (direction === 'OUT') {
            mySet.delete(number);
        }
    }
    let sorted =[...mySet.keys()].sort((a,b)=>a.localeCompare(b)).forEach(e=>console.log(e));
    //missing 'Empty car lot.' check!
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'
])