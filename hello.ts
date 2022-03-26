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
function student(config:any){
    return function(target:any){
        console.log(config,target);
        Object.defineProperty(target.prototype,'course',{value:
            ()=> config.course});
    };
}
@student({
    course:'angular 9'
})
class person{}

console.log(new person().course());