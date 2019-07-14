function getMin() {
    let minValue = arguments[0];

    for(let i = arguments.length; i >= 1; i--) {
        if (arguments[i] < minValue) {
            minValue = arguments[i];
        } 
    }
    return minValue;
}

console.log(getMin(10, 9, 10));
