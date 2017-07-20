//6
var people = [
        {name: 'Bara', income: '1B'},
  	    {name: 'Dara', income: '5B'},
  	    {name: 'Kara', income: '1M'},
  	    {name: 'Zara', income: '2K'}
  ];
  
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

function getTopNRichestNames(arr, number) {
  var requiredArray = arr.map(function(item) {
    var number = item.income.slice(0, -1);
    var letter = item.income.slice(-1);

    return {
      name: item.name,
      income: convertValue(number, letter)
    };
  }).sort(function(a, b) {
    return a.income < b.income;
  });

  return pluckByAttribute(requiredArray.slice(0, number), 'name');

  function convertValue(number, letter) {
    switch (letter) {
      case 'B': number *= 1e9;
      break;
      case 'M': number *= 1e6;
      break;
      case 'K': number *= 1e3;
    }
    return number;
  }
}
console.log(getTopNRichestNames(people, 3));
