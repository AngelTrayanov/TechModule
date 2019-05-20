function main(first, second, last) {
    function sumFirstSecond(first, second) {
        return first + second;
    }
    let sum = sumFirstSecond(first, second);
    function suntract(sum, last) {
        return sum - last;
    }
    console.log(suntract(sum, last));
}
main(1, 17, 30);