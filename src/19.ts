interface DateConstructor{
    new (value:number):Date
}

let MyDateConstructor:DateConstructor=Date;

const d = new MyDateConstructor();
