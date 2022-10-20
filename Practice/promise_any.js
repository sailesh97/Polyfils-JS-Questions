const task1 = (msg) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Task 1 completed...");
        }, 1500);
    })
};

const task2 = (msg) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Task 2 completed...");
        }, 2000);
    })
};

const task3 = (msg) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Task 3 completed...");
        }, 1000);
    })
};

const task4 = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos/1").then(data => {
        return data.json();
    }).then(d => {
        return d
    })
}

Promise.anyPolyfill = function(promiseArray) {
    return new Promise((resolve, reject) => {
        let count = 0;
        promiseArray.forEach(promise => {
            promise.then(resolve).catch(err => {
                count++;
                if(count === promiseArray.length){
                    reject("Aggregator: All Promises were rejected...")
                }
            })
        });
    })
}

Promise.anyPolyfill([task1(), task2(), task3()]).then(res => console.log(res)).catch(err => console.error("Failed:::", err))
Promise.any([task1(), task2(), task3()]).then(res => console.log(res)).catch(err => console.error("Failed:::", err))
