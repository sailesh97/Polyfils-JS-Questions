/**
 * Definition:
 * The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
 */

Array.prototype.myFilter = function(cb){
    let temp = [];
    for(let i = 0; i < this.length; i++){
        if(cb(this[i], i, this)) temp.push(this[i]);
    }

    return temp;
};

const nums = [1, 2, 3, 4];

const moreThanTwo = nums.myFilter((num) => {
    return num > 2;
});

console.log(moreThanTwo);

/**
 * Output: [3, 4]
 */