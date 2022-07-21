function promiseAll(arr) {
    const result = [];
    let index = 0;
    if (!Array.isArray(arr)) {
        throw new Error(`${arr} is not a Array`);
    }
    return new Promise((resolve, reject) => {
        arr.forEach((item, i) => {
            if (item instanceof Promise) {
                item.then(val => {
                    index++;
                    result[i] = val;
                    if (index === arr.length) {
                        resolve(result);
                    }
                }, (e) => {
                    reject(e);
                });
            } else {
                Promise.resolve(item).then(val => {
                    index++;
                    result[i] = val;
                    if (index === arr.length) {
                        resolve(result);
                    }
                }, (e) => {
                    reject(e);
                });
            }
        });
    });
}

function promiseRace(arr) {
    if (!Array.isArray(arr)) {
        throw new Error(`${arr} is not a Array`);
    }
    return new Promise((resolve, reject) => {
        arr.forEach(item => {
            const p = item instanceof Promise ? item : Promise.resolve(item);
            p.then((val) => {
                resolve(val);
            }, (e) => {
                reject(e);
            });
        });
    });
}

function promiseAny(arr) {
    let errorIndex = 0;
    if (!Array.isArray(arr)) {
        throw new Error(`${arr} is not a Array`);
    }
    return new Promise((resolve, reject) => {
        arr.forEach(item => {
            const p = item instanceof Promise ? item : Promise.resolve(item);
            p.then((val) => {
                resolve(val);
            }, (e) => {
                errorIndex++;
                if (errorIndex === arr.length) {
                    reject(e);
                }
            });
        });
    });
}