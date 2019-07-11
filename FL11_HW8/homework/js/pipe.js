function pipe(num) {
    for ( let i = arguments.length - 1; i >= 1; i-- ) { 
       num = arguments[i](num);
    }

    return( num );
}

function addOne(x) {
    return x + 1;
}

console.log( pipe(2, addOne, addOne) );