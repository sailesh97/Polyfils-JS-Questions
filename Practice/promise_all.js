const task1 = (msg) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task 1 completed...");
        }, 1000);
    })
};

const task2 = (msg) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task 2 completed...");
        }, 1000);
    })
};

const task3 = (msg) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task 3 completed...");
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

Promise.allPolyfill = function (promiseArray) {
    return new Promise((resolve, reject) => {
        let outputs = [];

        if (promiseArray.length === 0) {
            resolve([]);
            return;
        }

        let promiseLeft = promiseArray.length;
        promiseArray.forEach((promise, idx) => {
            promise.then(res => {
                outputs[idx] = res;
                promiseLeft--;
                if (promiseLeft == 0) resolve(outputs);
            }, reject);
        });
    })
}

Promise.allPolyfill([task1(), task2(), task3(), task4()]).then(res => console.log(res)).catch(err => console.error("Failed:::", err))
Promise.all([task1(), task2(), task3(), task4()]).then(res => console.log(res)).catch(err => console.error("Failed:::", err))
