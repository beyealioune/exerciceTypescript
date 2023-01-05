class  Person {
    private name : string;
    private age : number;
    constructor(name:string,age:number) { 
        this.name = name
        this.age = age
     }  
     tellMyName(): void {
        console.log(`i am ${this.name}`);
     }
     tellMyAge(): void {
        console.log(`i am ${this.age}`);
     }

     
     };
     


     const new1 = new Person("john", 40);
     const new2 = new Person( "Mary",35);
    