///////////////////////////////////////////////// Function 0 /////////////////////////////////////////////////

function getNumbers(string) {
    let arr = [];

    for (let i = 0; i < string.length; i++) {
        if (+string[i]) {
            arr.push(+string[i]);
        }
    }
    return arr;
}

console.log(getNumbers('kek'));
console.log(getNumbers('n1um3ber95'));

///////////////////////////////////////////////// Function 1 /////////////////////////////////////////////////

function findTypes() {
    let typesObj = {};

    for (let i = 0; i < arguments.length; i++) {
        let argType = typeof arguments[i];

        if (!typesObj[argType]) {
            typesObj[argType] = 0;
        }
        typesObj[argType]++;
    }
    return typesObj;
}

console.log(findTypes('kek', 1, 1, 1, null, null));

///////////////////////////////////////////////// Function 2 /////////////////////////////////////////////////

function executeForEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

executeForEach([1, 1, 1], function (el) {
    console.log(el)
});

///////////////////////////////////////////////// Function 3 /////////////////////////////////////////////////

function mapArray(arr, func) {
    let newArr = [];

    executeForEach(arr, function (el) {
        newArr.push(func(el))
    });
    return newArr;
}

console.log(mapArray([1, 1, 1], function (el) {
    return el + 3;
}));

///////////////////////////////////////////////// Function 4 /////////////////////////////////////////////////

function filterArray(arr, func) {
    let newArr = [];

    executeForEach(arr, function (el) {
        if (func(el)) {
            newArr.push(el);
        }
    });
    return newArr;
}

console.log(filterArray([1, 1, 1], function (el) {
    return el > 3;
}));

///////////////////////////////////////////////// Function 5 /////////////////////////////////////////////////

function showFormattedDate(date) {
    const monthNames = ['Jan', 'Feb', 'Mar',
                        'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep',
                        'Oct', 'Nov', 'Dec'];

    return `Date: ${monthNames[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}

console.log(showFormattedDate(new Date('2019-01-27T01:10:00')))

///////////////////////////////////////////////// Function 6 /////////////////////////////////////////////////

function canConvertToDate(date) {
    return !isNaN(date.getDate());
}

console.log(canConvertToDate(new Date('2016-13-18T00:00:00')));
console.log(canConvertToDate(new Date('2016-10-18T00:00:00')));

///////////////////////////////////////////////// Function 7 /////////////////////////////////////////////////

function daysBetween(date1, date2) {
    const mSecInDay = 8.64e7;
    return Math.abs(Math.round((date1 - date2) / mSecInDay));
}

console.log('Days between dates: ' + daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));

///////////////////////////////////////////////// Function 8 /////////////////////////////////////////////////

let usersInfo = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        ' birthday ': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        ' birthday ': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        ' birthday ': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        ' birthday ': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
]

function getAmountOfAdultPeople(data) {
    let numOfAdults = 0;
    const daysIn18years = 365 * 18;

    filterArray(data, function (el) {
        if (daysBetween(new Date(), new Date(el[' birthday '])) >= daysIn18years) {
            numOfAdults++;
        }
    });
    return numOfAdults;
}

console.log('Adults: ' + getAmountOfAdultPeople(usersInfo));

///////////////////////////////////////////////// Function 9 /////////////////////////////////////////////////

function keys(obj) {
    let objKeysArr = [];

    for (let key in obj) {
        if ({}.hasOwnProperty.call(obj, key)) {
            objKeysArr.push(key);
        }
    }
    return objKeysArr;
}

console.log(keys({ keyOne: 1, keyTwo: 2, keyThree: 3 }));

///////////////////////////////////////////////// Function 10 /////////////////////////////////////////////////

function values(obj) {
    let objValuesArr = [];

    for (let key in obj) {
        if ({}.hasOwnProperty.call(obj, key)) {
            objValuesArr.push(obj[key]);
        }
    }
    return objValuesArr;
}

console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));