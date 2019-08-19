function assign(mainObj) {
    for (let i = 1; i < arguments.length; i++) {
        for (let key in arguments[i]) {
            if (arguments[i].hasOwnProperty(key)) {
                mainObj[key] = arguments[i][key];
            }
        }
    }
    return mainObj;
}

const defaults = { a: 123, b: 777 };
const options = { a: 456 };
const configs = assign({}, defaults, options);
console.log(configs)