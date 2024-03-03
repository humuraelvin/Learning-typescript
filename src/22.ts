class Car{
    make:string;
    model:string;
    year:number;
    isElectric:boolean;

    constructor(make:string, model:string, year:number, isElectric:boolean){
        this.make = make;
        this.model = model;
        this.year = year;
        this.isElectric = isElectric
    }

}

let MyCar = new Car("Toyota", "RangeRover", 2024, true);