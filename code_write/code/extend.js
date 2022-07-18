/**
 * 原型继承
 * @param {*} Child
 * @param {*} Parent
 */
function prototypeExtends(Child, Parent) {
    Child.prototype = new Parent();
}

/**
 * 构造函数继承
 */
function constructorExtends(Child, Parent) {
    const F = function() {
        const child = new Child(arguments);
        Parent.call(child, arguments);
    }
    return F;
}

/**
 * 组合继承
 */
function comboExtends(Child, Parent) {
    const F = function() {
        const child = new Child(arguments);
        Parent.call(child, arguments);
        Child.prototype = new Parent();
        Child.prototype.constructor = Child;
        return child;
    }
    return F;
}

/**
 * 寄生组合式继承
 */
function parasiticComboExtends(Child, Parent) {
    const F = function() {
        const child = new Child(arguments);
        Parent.call(child, arguments);
        Child.prototype = Object.create(Parent.prototype);
        Child.prototype.constructor = Child;
        return child;
    }
    return F;
}