function piccolo(allCarsNums) {
    let carNumsMap = new Map();

    for (let currentCarNums of allCarsNums) {
        
        currentCarNums = currentCarNums.split(', ');
        let action = currentCarNums.shift();
        currentCarNums = currentCarNums.join('');
        
        if (action == 'IN') {
            carNumsMap.set(currentCarNums, 1);
        } else if (action == 'OUT') {
            carNumsMap.delete(currentCarNums);
        }
    }

    let sorted = [...carNumsMap].sort((a,b)=>a[0].localeCompare(b[0]));

    if (sorted.length > 0) {
        sorted.forEach(e=>console.log(e[0]));
    } else {
        console.log('Parking Lot is Empty ');
    }
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
'IN, CA2822UU']);