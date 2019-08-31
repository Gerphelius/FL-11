///////////////////////////////////////// First //////////////////////////////////////////////

function maxElement(arr) {
    return arr.reduce((currentMax, nextValue) => Math.max(currentMax, nextValue), 0)
}

const arrayNum = [41, 122, 35, 14, 0, 55, 136, 37, 128, 9, 0];

console.log(maxElement(arrayNum)); // 136

///////////////////////////////////////// Second /////////////////////////////////////////////

function copyArray(...others) {
    let newArray = [];
    for (let i = 0; i < others.length; i++) {
        if (others[i] instanceof Array) {
            others[i].forEach(element => {
                newArray.push(element);
            });
        } else {
            console.log(`${others[i]} is not an array`);
        }
    }
    return newArray;
}

const array = [1, 2, 3];
const copiedArray = copyArray(array, {0: 'kek', 1: 'pek'}, [4, 5, 6]);
console.log(array, copiedArray);
console.log(array === copiedArray);

///////////////////////////////////////// Third /////////////////////////////////////////////

function addUniqueId(obj) {
    let clonedObj = {};

    (function deepClone(obj) {
        for (let key in obj) {
            if (key instanceof Object) {
                deepClone(obj[key])
            } else {
                clonedObj[key] = obj[key];
            }
        }
        clonedObj.id = Symbol();
    }(obj));
    return clonedObj;
}

let obj = {
    name: 123,
    address: {
        home: 456,
        flat: 789
    }
};
console.log(addUniqueId(obj));
console.log(addUniqueId(obj) === obj);

///////////////////////////////////////// Fourth ////////////////////////////////////////////

function regroupObject(oldObj) {
    let {name} = oldObj;
    let {id, age, university} = oldObj.details;
    let newObj = {};
    newObj.university = university;
    newObj.user = {id, age};
    newObj.user.firstname = name;
    return newObj;
}

const oldObj = {name: 'Someone', details: {id: 1, age: 11, university: 'UNI'}};
console.log(regroupObject(oldObj));

///////////////////////////////////////// Fifth ////////////////////////////////////////////

function findUniqueElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let n = arr.length; n > i; n--) {
            if (arr[i] === arr[n]) {
                arr.splice(n, 1);
            }
        }
    }
    return(arr);
}

const arrayForSort = [1, 1, 23, 3, 4, 5, 6, 5, 4, 23, 2, 1, 1, 1, 1, 1];
console.log(findUniqueElements(arrayForSort));

///////////////////////////////////////// Sixth ////////////////////////////////////////////

function hideNumber(phoneNumber) {
    phoneNumber = phoneNumber.slice(6).padStart(10, '*');
    return phoneNumber;
}

const phoneNumber = '0123456789';
console.log(hideNumber(phoneNumber));

///////////////////////////////////////// Seventh ///////////////////////////////////////////

function add(a = 'n/a', b = 'n/a') {
    if (a === 'n/a' || b === 'n/a') {
        throw Error('Missing property')
    }
    console.log(a + b);
}

add(1, 3);

///////////////////////////////////////// Eighth ///////////////////////////////////////////

function sortByName(jsonData) {
    jsonData.sort((a, b) => {
        if (a.name < b.name) return -1;
    })
    console.log(jsonData);
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(sortByName)
    .catch(error => console.error(error));

///////////////////////////////////////// Ninth ////////////////////////////////////////////

(async function sortByName() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users'); 
        let usersArr = await response.json();
        let sortedUsers = usersArr.sort((a, b) => {
            if (a.name < b.name) return -1;
        })
        console.log(sortedUsers);
    } catch (err) {
      console.error(err);
    }
}());
