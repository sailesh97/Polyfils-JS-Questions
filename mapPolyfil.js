// Polyfil for map

// Array.map((num, i, arr) => { })

/**
 * Definition: The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
 */

Array.prototype.myMap = function(cb){
    let temp = [];
    for(let i = 0; i < this.length; i++){
        temp.push(cb(this[i], i, this));
    }

    return temp;
};

const nums = [1, 2, 3, 4];

const multipleThree = nums.map((num, i, arr) => {
    return num * 3;
});

const multipleThree2 = nums.myMap((num, i, arr) => {
    return num * 3;
});

console.log(multipleThree, multipleThree2);

/**
 * Output: [
    3,
    6,
    9,
    12
]
 */