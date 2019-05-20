function solve(arr) {
    let ourArr = arr.slice();
    let scheduled = ourArr.shift();
    let statusChange = ourArr.shift();
    let finalStatus = ourArr.pop();
    class Flight {
        constructor(flight, destination, status){
            this.flight = flight;
            this.destination = destination;
            this.status = status;
        }
    }

    let flights = [];
    for (let i = 0; i < scheduled.length; i++) {
        
        let [flight,destination] = scheduled[i].split(' ');
        let status = 'Ready to fly';
        let newFlight = new Flight(flight, destination, status);
        flights.push(newFlight);
        
    }

    for (let j = 0; j < statusChange.length; j++) {
        let [currentFlight, currentStatus] = statusChange[j].split(' ');
        for (let airplane of flights) {
            if (airplane.flight == currentFlight) {
                airplane.status = currentStatus;
            }
        }
    }
    let filtered = flights.filter(i=>i.status === finalStatus[0]).forEach(i=>console.log(`{ Destination: '${i.destination}', Status: '${i.status}' }`));
}

// solve([
//     ['WN269 Delaware',
//         'FL2269 Oregon',
//         'WN498 Las Vegas',
//         'WN3145 Ohio',
//         'WN612 Alabama',
//         'WN4010 New York',
//         'WN1173 California',
//         'DL2120 Texas',
//         'KL5744 Illinois',
//         'WN678 Pennsylvania'
//     ],
//     ['DL2120 Cancelled',
//         'WN612 Cancelled',
//         'WN1173 Cancelled',
//         'SK430 Cancelled'
//     ],
//     ['Cancelled']

// ]);
solve([['WN269 Delaware', 

'FL2269 Oregon', 

 'WN498 Las Vegas', 

 'WN3145 Ohio', 

 'WN612 Alabama', 

 'WN4010 New York', 

 'WN1173 California', 

 'DL2120 Texas', 

 'KL5744 Illinois', 

 'WN678 Pennsylvania'], 

 ['DL2120 Cancelled', 

'WN612 Cancelled', 

'WN1173 Cancelled', 

'SK330 Cancelled'], 

['Ready to fly'] 

] );