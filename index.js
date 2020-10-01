var lucky;
lucky = 23;
var font;
var person = {
    first: 'Soham',
    last: 'Tiwari'
};
var person2 = {
    first: 'Soham',
    last: 'Tiwari',
    fast: true
};
function pow(x, y) {
    return Math.pow(x, y).toString();
}
function pow2(x, y) {
    Math.pow(x, y).toString();
}
// ARRAYS
var arr = [];
arr.push(1);
var arr2 = [];
arr2.push(1);
arr2.push('23');
arr2.push(true);
// GENERICS
var Observable = /** @class */ (function () {
    function Observable(value) {
        this.value = value;
    }
    return Observable;
}());
var x;
var y;
var z = new Observable('23');
