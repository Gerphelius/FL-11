function reverseNumber(num) {
    let reversedNum = 0;
    let lastNum = 0;

    while (num) {
        lastNum = num % 10;
        reversedNum = reversedNum * 10 + lastNum;

        if (num < 0) {
            num = Math.ceil(num / 10);
        } else {
            num = Math.floor(num / 10);
        }
    }

    return reversedNum;
}

console.log(reverseNumber(-625));
