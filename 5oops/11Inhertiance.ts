class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
  walk() {
    console.log('walking...');
  }
}

class Student extends Person {
  constructor(private id: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
  takeTest(): void {
    console.log('Taking A test');
  }
}

class Teacher extends Person {
  override get fullName() {
    return 'Professor' + super.fullName;
  }
}

let S1 = new Student(1, 'Mohammad', 'Farhan');
let T1 = new Student(1, 'BP', 'Sharma');

console.log(T1.fullName);
