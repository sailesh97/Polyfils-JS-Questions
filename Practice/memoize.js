function memoization(fn){
    let cache = {}
    return function(...args){
        let argsToStr = JSON.stringify(args);
        if(argsToStr in cache){
            console.log("From cache")
            return cache[argsToStr];
        } else{
            const res = fn.apply(this, args);
            cache[argsToStr] = res;
            console.log('Calculating...');
            return res;
        }
    }
}

const factorial = (num) => {
    if(num === 0) return 1;
    return num * factorial(num - 1);
}
const memoized_factorial = memoization(factorial);
let res = memoized_factorial(5);
res = memoized_factorial(5)
res = memoized_factorial(5)
res = memoized_factorial(5)
res = memoized_factorial(5)
res = memoized_factorial(5)
console.log(res)