"use strict";
/* function age(constructor:Function){
    console.log('in decorator function',constructor);
    constructor.prototype.age = 23;
}

@age
class Greeting{
    name:string;
    message:string;
    constructor(name:string,message:string){
        this.name = name;
        this.message = message;
    }
    sayHello(){
        console.log(`${this.message} ${this.name} Your Age is: ${this.age}`);
    }
}
console.log(new Greeting('Ahmed','Hi').sayHello());
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* function classDecrator<T extends{new (...args: any[]):{}}
>(constructor:T){
    return class extends constructor{
        new_property= 'new Property';
        hello="override";
    };

}

@classDecrator
class Greeting {
    property="property";
    hello:string;
    constructor(m:string){
        this.hello = m;
    }
}
console.log(new Greeting('Hi')); */
function student(config) {
    return function (target) {
        console.log(config, target);
        Object.defineProperty(target.prototype, 'course', { value: () => config.course });
    };
}
let person = class person {
};
person = __decorate([
    student({
        course: 'angular 9'
    })
], person);
console.log(new person().course());
