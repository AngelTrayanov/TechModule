function palindromeOrNot(numbers) {
    
    let isPalindrome = (a,b)=> a===b;
    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];
        let reversedNumber = Number(currentNumber.toString().split('').reverse().join(''));
        console.log(isPalindrome(currentNumber, reversedNumber));
    }
}
palindromeOrNot([32,2,232,1010]);