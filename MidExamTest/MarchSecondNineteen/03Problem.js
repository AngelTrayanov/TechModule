function solve(input) {
    let arr = input.slice(0);
    arr.pop();
    let bestQuality = 0;
    let bestAverageQuality = 0;
    let bestLength = 0;
    let bestBatch = [];

    for (let i = 0; i < arr.length; i++) {

        let currentBatch = arr[i].split('#');
        let currentQuality = 0;
        let currentAverageQuality = 0;
        let currentLength = 0;
        for (let k = 0; k < currentBatch.length; k++) {

            currentQuality += +currentBatch[k];
            currentLength++;

        }
        currentAverageQuality = currentQuality / currentLength;
        if (i == 0) {
            bestQuality = currentQuality;
            bestAverageQuality = currentAverageQuality;
            bestLength = currentLength;
            bestBatch = currentBatch;
        }

        if (currentQuality > bestQuality) {
            bestQuality = currentQuality;
            bestBatch = currentBatch;
        } else if (currentQuality == bestQuality) {
            if (currentAverageQuality > bestAverageQuality) {
                bestQuality = currentQuality;
                bestAverageQuality = currentAverageQuality;
                bestBatch = currentBatch;
            } else if (currentAverageQuality == bestAverageQuality) {
                if (currentLength < bestLength) {
                    bestQuality = currentQuality;
                    bestBatch = currentBatch;
                }
            }
        }

    }
    console.log(`Best Batch quality: ${bestQuality}`);
    console.log(bestBatch.join(' '));
}
solve(['5#4#10#-2', '10#5#2#3#2', 'Bake It!']);
//solve(['5#3#2', '10#2#-2#1#-1', '4#2#1', 'Bake It!']);