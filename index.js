var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyName = function () {
        console.log("i am ".concat(this.name));
    };
    Person.prototype.tellMyAge = function () {
        console.log("i am ".concat(this.age));
    };
    return Person;
}());
