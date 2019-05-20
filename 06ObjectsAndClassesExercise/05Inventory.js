function inventory(input) {
    let inventory = [];

    for (let inputRow of input) {
        
        let [name, level, items] = inputRow.split(' / ');
        level = +level;
        items = items.split(', ');
        
        inventory.push({
            name,
            level,
            items
        });

    }
    console.log(JSON.stringify(inventory));
}
inventory(["Isacc / 25 / Apple, GravityGun", "Derek / 12 / BarrelVest, DestructionSword", "Hes / 1 / Desolator, Sentinel, Antara"]);