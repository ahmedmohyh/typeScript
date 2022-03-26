var Greeting = /** @class */ (function () {
    function Greeting(name, message) {
        this.name = name;
        this.message = message;
    }
    Greeting.prototype.sayHello = function () {
        console.log("".concat(this.name, " ").concat(this.message));
    };
    return Greeting;
}());
console.log(new Greeting('Ahmed', 'Hi Ahmed'));
