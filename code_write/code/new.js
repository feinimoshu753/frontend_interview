const customNew = (Class, ...params) => {
    const obj = {};
    obj.__proto__ = Class.prototype;
    const result = Class.apply(obj, params);
    // 如果构造函数返回了对象或者函数，直接返回该对象或者函数
    if (typeof result === 'object' || typeof result === 'function') {
        return result;
    }
    return obj;
}

function Pig(name, age) {
    this.name = name;
    this.age = age;
}

console.log(customNew(Pig, 'tony', 10));
console.log(new Pig('tony', 10));