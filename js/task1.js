//1
function forEach(arr, fn) {
    var l = arr.length;
    for (var i = 0; i < l; i++) {
        fn(arr[i]);
    }
}
forEach([3, 5, 2], function(el) {
    console.log(el)
})