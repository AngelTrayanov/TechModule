function main(currentLoadingStage) {
    
    let currentProcent = Math.abs((100 - currentLoadingStage) - 100);
    if (currentLoadingStage === 100) {
        console.log(status(currentLoadingStage));
        console.log(loadingBar(currentLoadingStage));
    } else {
        console.log(`${currentProcent}% ${loadingBar(currentLoadingStage)}`);
        console.log(status(currentLoadingStage));
    }
    function loadingBar(currentLoadingStage) {
        let bar = [];
        let dots = (100 - currentLoadingStage) / 10;
        let procentage = (10 - dots);
        bar.push('[','%'.repeat(procentage),'.'.repeat(dots),']');
        let result = bar.join('');
        return result;
    }
    function status(currentLoadingStage) {
        if (currentLoadingStage === 100) {
            return '100% Complete!';
        } else {
            return 'Still loading...';
        }
    }
}
main(30);