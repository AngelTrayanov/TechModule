function tooEarlyForChristmas(input) {
    let allowedQuantity = +input[0];
    let totalDays = +input[1];

    let ornamentSetPrice = 2;
    let treeSkirtPrice = 5;
    let treeGarlandsPrice = 3;
    let treeLightsPrice = 15;

    let totalCost = 0;
    let totalSpirit = 0;

    for (let i = 1; i <= totalDays; i++) {
        if (i % 11 === 0) {
            allowedQuantity += 2;
        }
        if (i % 2 === 0) {
            // Every second day you buy an Ornament Set quantity of times and increase your Christmas spirit by 5.
            totalCost += allowedQuantity * ornamentSetPrice;
            totalSpirit += 5;
        }
        if (i % 3 === 0) {
            // Every third day you buy Tree Skirts and Tree Garlands (both quantity of times) and increase your spirit by 13.
            totalCost += (treeGarlandsPrice * allowedQuantity) + (treeSkirtPrice * allowedQuantity);
            totalSpirit += 13;
        }
        if (i % 5 === 0) {
            // Every fifth day you buy Tree Lights quantity of times and increase your Christmas spirit by 17.
            totalCost += treeLightsPrice * allowedQuantity;
            totalSpirit += 17;
            if (i % 3 === 0) {
                // If you have bought Tree Skirts and Tree Garlands at the same day you additionally increase your spirit by 30.
                totalSpirit += 30;
            }

        }
        if (i % 10 === 0) {
            // Every tenth day you lose 20 spirit, because your cat ruins all tree decorations
            // and you have to rebuild the tree and buy one piece of tree skirt, garlands and lights.
            // That is why you are forced to increase the allowed quantity with 2 at the beginning of every eleventh day.
            totalSpirit -= 20;
            totalCost += treeSkirtPrice + treeGarlandsPrice + treeLightsPrice;
            
            if (i === totalDays) {
                totalSpirit -= 30;
            }
        }
        // Also if the last day is a tenth day the cat decides to demolish even more
        // and ruins the Christmas turkey and you lose additional 30 spirit.
    }
    console.log(`Total cost: ${totalCost}`);
    console.log(`Total spirit: ${totalSpirit}`);
}
tooEarlyForChristmas(['3', '20']);