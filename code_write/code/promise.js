class MyPromise {

    state = 'pending';
    value = null;
    error = null;

    constructor(resolver) {
        if (typeof resolver !== 'function') {
            throw new Error('Promise resolver must be a function');
        }
        try {
            resolver(this.resolve.bind(this), this.reject.bind(this));
        } catch(e) {
            console.log('error:', e);
        }
    }

    resolve(val) {
        if (this.state !== 'pending') {
            return;
        }
        this.state = 'fulfilled';
        this.value = val;
    }

    reject(error) {
        if (this.state !== 'pending') {
            return;
        }
        this.state = 'rejected';
        this.error = error;
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => {};
        onRejected = typeof onRejected === 'function' ? onRejected : (error) => { throw new Error(`Uncaught (in promise) Error: ${error}`) };
        return new MyPromise(( resolve, reject ) => {
            console.log('this.state:', this.state);
            if (this.state === 'fulfilled') {
                const result = onFulfilled(this.value);
                resolve(result);
            }
            if (this.state === 'rejected') {
                const error = onRejected(this.error);
                reject(error);
            }
         });
    }

}

new MyPromise(( resolve, reject ) => {
    reject(111)
}).then((val) => {
    console.log('onFulfilled:', val);
}, (error) => {
    console.log('onRejected:', error);
});
