Array.prototype.filter_polyfil = function(cb){
    let arr = this, temp = [];

    for(let i = 0; i < arr.length; i++){
        if(cb(arr[i])) temp.push(arr[i])
    }
}

let arr = [1,2,3,4];

let arr2 = arr.filter(el => el >2);
console.log(arr2);