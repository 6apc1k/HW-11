//4


var charactersMap = {
    a: 'o',
    c: 'd',
    t: 'g'
};
var phrase = 'kitty cat';

function forEach(arr, fn) {
    var l = arr.length;
    for (var i = 0; i < l; i++) {
        fn(arr[i]);
    }
}

function getTransformedArray(fn, arr) {
    var newArray = [];
    forEach(arr, function(el) {
        newArray.push(fn(el));
    });
    return newArray;
}

function pluckByAttribute(arr, label) {
    function getValue(obj) {
        return obj[label];
    }
    return getTransformedArray(getValue, arr);
}

function cypher(obj, str) {
    var letter = str.split("");

    function cypherFunc(el) {
        return obj[el] || el;
    }
    var NewArray = getTransformedArray(cypherFunc, letter);
    str = NewArray.join("");
    return str;
}
console.log(cypher(charactersMap, phrase));
