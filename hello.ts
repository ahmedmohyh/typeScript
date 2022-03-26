class Greeting{
    name:string;
    message:string;
    constructor(name:string,message:string){
        this.name = name; 
        this.message = message;
    }
    sayHello(){
        console.log(`${this.name} ${this.message}`);
    }
}
console.log(new Greeting('Ahmed','Hi Ahmed'));