const arr = [1, 2, 3, 4];

Array.prototype.map_polyfil = function(cb) {
    let temp = [], arr = this;
    for(let i = 0; i< arr.length; i++){
        temp.push(arr[i]*2)
    }
    return temp;
}

const arr2 = arr.map_polyfil((el, indx, arr) => {
    return el * 2;
})

console.log(arr2)