function factorialDivision(first, second) {
    
    function factCalculator(number) {
        let factorial = 1;
        for (let i = 2; i <= number; i++) {
            
            factorial *=i;
        }
        return factorial;
    }
    let firstNumberFact = factCalculator(first);
    let secondNumberFact = factCalculator(second);
    let finalResult = firstNumberFact/secondNumberFact;
    console.log(finalResult.toFixed(2));
}
factorialDivision(6, 2);