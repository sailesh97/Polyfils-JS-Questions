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

Promise.racePolyfill = function(promiseArray) {
    return new Promise((resolve, reject) => {
        promiseArray.forEach(promise => {
            promise.then(resolve).catch(reject);
        });
    })
}

Promise.racePolyfill([task1(), task2(), task3()]).then(res => console.log(res)).catch(err => console.error("Failed:::", err))
Promise.race([task1(), task2(), task3()]).then(res => console.log(res)).catch(err => console.error("Failed:::", err))
