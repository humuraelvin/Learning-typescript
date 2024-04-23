class Person {
  name: string;
  age: number;
  public explain(): string {
    return `${this.name} is ${this.age} years old`;
  }

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Man extends Person {
  gender: string;
  public isMan(gender: string): boolean {
    if (gender == "male") {
      return true;
    } else {
      return false;
    }
  }
  constructor(name: string, age: number, gender: string) {
    super(name, age);
    this.gender = gender;
  }
}

let humura = new Man("HUMURA", 20, "MALE");

interface Human {
  name: string;
  age: number;
  describe: (name: string, age: string) => string;
}

interface Student extends Human {
  currentCollege: string;
  yearOfStudy: number;
}

const person1 = {
  name: "humura",
  age: 18,
  yearOfStudy: 1,
  describe(name: string, age: number): string {
    return `${name} is ${age} years old`;
  },
  currentCollege: "RCA"
  
};

//function describeStudent(student:Student):string{
   // let basicDescription = student.describe(student.name, student.age);
    //return `${basicDescription} and he is currently learning in ${student.currentCollege}`
//}
