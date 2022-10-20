/**
 * Definition:
 * The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

    The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

    Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array:
 */

Array.prototype.myReduce = function(cb, initialValue){
    var accumulator = initialValue;

    for(let i = 0; i < this.length; i++){
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }

    return accumulator;
}

const nums2 = [1, 2, 3, 4];

const sum = nums2.myReduce((acc, curr, i, arr) => {
    return acc + curr;
}, 0);

console.log(sum);

/**
 * Output: 10
 */