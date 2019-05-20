function santaCookieMonster(input) {
    let arr = input.slice(0);
    let numberOfBatches = Number(arr.shift());

    let flour = 0;
    let sugar = 0;
    let cocoa = 0;

    let flourCups = 0;
    let sugarCups = 0;
    let cocoaCups = 0;

    let cookiesPerBatch = 0;
    let boxesPerBatch = 0;
    let totalBoxes = 0;

    for (let i = 0; i < numberOfBatches; i++) {

        flour = Number(arr.shift());
        sugar = Number(arr.shift());
        cocoa = Number(arr.shift());

        flourCups = flour / 140;
        sugarCups = sugar / 20;
        cocoaCups = cocoa / 10;
        let leastAvailable = Math.min(flourCups, sugarCups, cocoaCups);

        if (leastAvailable < 1) {
            console.log('Ingredients are not enough for a box of cookies.');
            boxesPerBatch = 0;
        } else {
            cookiesPerBatch = (((140 + 20 + 10) * Math.floor(leastAvailable)) / 25);
            boxesPerBatch = Math.floor(cookiesPerBatch / 5);
            console.log(`Boxes of cookies: ${boxesPerBatch}`);
        }

        totalBoxes += boxesPerBatch;
    }
    console.log(`Total boxes: ${totalBoxes}`);
}
santaCookieMonster(['1' , '1400', '200', '100']);
//santaCookieMonster(['2', '200', '300', '500', '100', '200', '50']);