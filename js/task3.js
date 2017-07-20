//3
var presidents = [{
    name: 'George',
    surname: 'Kush'
}, {
    name: 'Barako',
    surname: 'Obaame'
}];

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

console.log(pluckByAttribute(presidents, 'name'));