function toJSON(obj) {
    let a = JSON.stringify(obj);

    return a;
}

let obj = 233443;

toJSON(obj);

module.exports = toJSON;
