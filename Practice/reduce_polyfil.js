Array.prototype.reduce_polyfil = function(cb, initialValue){
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        accumulator = accumulator ? cb(accumulator, this[i]) : this[i];
    }
    return accumulator;
}

let arr = [1,2,3,4];
let res = arr.reduce((prevValue, currValue) => {
    return prevValue + currValue;
}, 0);

console.log(res)