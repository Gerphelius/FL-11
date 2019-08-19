function create(protoObj, propertiesObj) {
    let newObj = {};

    if (typeof protoObj !== 'object') {
        throw new TypeError(`Object prototype may only be an Object or null: ${protoObj}`);
    }
    newObj.__proto__ = protoObj;

    if (typeof propertiesObj === 'object') {
        for (let prop in propertiesObj) {
            if ({}.hasOwnProperty.call(propertiesObj, prop)) {
                if (typeof propertiesObj[prop] !== 'object') {
                    throw new TypeError(`Property description must be an object: ${propertiesObj[prop]}`);
                }
                Object.defineProperty(newObj, prop, propertiesObj[prop]);
            }
        }
    }
    return newObj
}

const test = 'bar';
const obj1 = { prop: 5 };
const obj2 = create(obj1);

console.log(Object.getPrototypeOf(obj2) === obj1);
console.log(obj2.prop);

const obj3 = create(obj1, {foo: {enumerable: true, value: 15}});

console.log(Object.getPrototypeOf(obj3) === obj1);
console.log(obj3);
console.log(obj3.prop, obj3.foo);

let descriptor = Object.getOwnPropertyDescriptor(obj3, 'foo');
console.log( JSON.stringify(descriptor, null, 2 ) );
obj3.foo = 'trying to change value';
console.log(obj3.foo);

let obj4, obj5;

try {
    obj4 = create(test);
} catch(error) {
    console.log(error)
} 

try {
    obj5 = create({}, { bar: 'erroren' });
} catch(error) {
    console.log(error)
} 