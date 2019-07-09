function reverseNumber(num) {
    let isNegative = 0;
    let isMinus = '';

    if ( num < 0 ) {
        isNegative = 1;
        isMinus = '-';
    }

    num = num.toString().slice(isNegative).split('').reverse().join('');
    return +(isMinus + num)
}

console.log( reverseNumber(10000) )