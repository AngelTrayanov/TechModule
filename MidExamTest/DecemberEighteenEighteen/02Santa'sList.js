function santaIsTrue(arr) {
    let ourArr = arr.slice();
    let listOfKids = ourArr.shift().split('&');
    ourArr.pop();

    for (let i = 0; i < ourArr.length; i++) {

        let current = ourArr[i].split(' ');
        let command = current[0];

        if (command === 'Bad') {
            //Bad {kidName} - adds a kid at the start of the list.  If the kid already exists skip this line.
            if (!listOfKids.includes(current[1])) {
                listOfKids.unshift(current[1]);
            }
        } else if (command === 'Good') {
            //Good {kidName} - removes the kid with the given name only if he exists in the list, otherwise skip this line.
            if (listOfKids.includes(current[1])) {
                let goodIndex = listOfKids.indexOf(current[1]);
                listOfKids.splice(goodIndex, 1);
            }
        } else if (command === 'Rename') {
            //Rename {oldName} {newName} – if the kid with the given old name exists change
            // his name with the newer one. If he doesn't exist skip this line.
            if (listOfKids.includes(current[1])) {
                let renameIndex = listOfKids.indexOf(current[1]);
                listOfKids.splice(renameIndex,1,current[2]);
            }
        } else if (command === 'Rearrange') {
            //Rearrange {kidName} - If the kid exists in the list remove him from
            // his current position and add him at the end of the list.
            if (listOfKids.includes(current[1])) {
                let rearrangeIndex = listOfKids.indexOf(current[1]);
                let rearrange = listOfKids.splice(rearrangeIndex, 1);
                listOfKids.push(rearrange);
            }
        }

    }
    console.log(listOfKids.join(', '));
}
santaIsTrue(['Peter&George&Mike', 'Bad Joshua', 'Good Peter', 'Finished!']);
// santaIsTrue(['Joshua&Aaron&Walt&Dustin&William', 'Good Walt', 'Bad Jon',
//     'Rename Aaron Paul', 'Rearrange Jon', 'Rename Peter George', 'Finished!'
// ]);