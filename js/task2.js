//2
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

function increment(num) {
    return num + 1
}
console.log(getTransformedArray(increment, [1, 7, 20]));