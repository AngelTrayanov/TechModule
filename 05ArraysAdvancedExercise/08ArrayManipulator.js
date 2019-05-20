function arrayManUpilater(arr, commands) {

    let ourArray = arr.slice();
    let current;
    let currentCommand;


    for (let i = 0; i < commands.length; i++) {

        current = commands[i].split(' ');
        currentCommand = current[0];

        switch (currentCommand) {
            case 'add':
                add(current[1], current[2]);
                break;
            case 'addMany':
                let currentLength = current.length;
                addMany(current[1], currentLength);
                break;
            case 'contains':
                contains(current[1]);
                break;
            case 'remove':
                remove(current[1]);
                break;
            case 'shift':
                shift(current[1]);
                break;
            case 'sumPairs':
                sumPairs();
                break;
            
        }

    }

    console.log(ourArray);

    function add(index, element) {
        // ⦁	add <index> <element> – adds element at the specified index
        // (elements right from this position inclusively are shifted to the right).
        let addIndex = +index;
        let addElement = +element;

        ourArray.splice(addIndex, 0, addElement);
    }

    function addMany(index, manyLength) {
        // ⦁	addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index.
        let addManyIndex = +index;
        let rotations = +manyLength;
        for (let i = 2; i < rotations; i++) {

            ourArray.splice(addManyIndex, 0, +current[i]);
            addManyIndex++;
        }
    }

    function contains(element) {
        // ⦁	contains <element> – prints the index of the first occurrence of
        // the specified element (if exists) in the array or -1 if the element is not found.
        let searchNumber = +element;
        if (!ourArray.includes(searchNumber)) {
            console.log(-1);
        } else {
            console.log(ourArray.indexOf(searchNumber));
        }
    }

    function remove(index) {
        // ⦁	remove <index> – removes the element at the specified index.
        let removeIndex = +index;
        ourArray.splice(removeIndex, 1);
    }
    //
    function shift(shifts) {
        // ⦁	shift <positions> – shifts every element of the array the number of positions to the left (with rotation).
        // ⦁	    For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]
        let shiftsNumber = +shifts;
        for (let k = 0; k < shiftsNumber; k++) {
            let shifted = ourArray.shift();
            ourArray.push(shifted);

        }

    }

    function sumPairs() {
        // ⦁	sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
        // ⦁	    For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].
        let sum = [];
        for (let a = 0; a < ourArray.length; a+=2) {
            if (ourArray.length - 1 === a) {
                sum.push(ourArray[a]);
                break;
            }
            let currentPair = ourArray[a]+ourArray[a+1];
            sum.push(+currentPair);
        }
        ourArray = sum.slice();
    }
}
arrayManUpilater([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);