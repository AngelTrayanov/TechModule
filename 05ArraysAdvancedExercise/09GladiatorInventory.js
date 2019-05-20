function solve(arr) {
    let inventory = arr.shift().split(' ');
    let command = '';
    let item = '';
    for (let weapon of arr) {
        weapon = weapon.split(' ');
        command = weapon[0];
        item = weapon[1];
        // If you receive Buy command, you should add the equipment at last position in the inventory,
        //  but only if it isn't bought already.
        if (command === "Buy") {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }
            // If you receive Trash command, delete the equipment if it exists.
        } else if (command === "Trash") {
            if (inventory.includes(item)) {
                let trashIndex = inventory.indexOf(item);
                inventory.splice(trashIndex, 1);
            }
            // If you receive Repair command, you should Repair the equipment if it exists and place it on last position.
        } else if (command === 'Repair') {
            if (inventory.includes(item)) {
                let repairIndex = inventory.indexOf(item);
                inventory.splice(repairIndex, 1);
                inventory.push(item);
            }
            // If you receive Upgrade command, you should check if the equipment exists and 
            // insert after it the upgrade in the following format: "{equipment}:{upgrade}";
        } else if (command === 'Upgrade') {
            item = item.split('-');
            let upgradeItem = item[0];
            let upgradeMaterial = item[1];
            if (inventory.includes(upgradeItem)) {
                let upgradeIndex = inventory.indexOf(upgradeItem) + 1;
                console.log(upgradeIndex);
                inventory.splice(upgradeIndex, 0, `${upgradeItem}:${upgradeMaterial}`);
            }
        }
    }
    console.log(inventory.join(' '));
}
solve([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'
])