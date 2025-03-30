function Person(name, age) {
    this.name = name
    this. age = age
}

Person.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`)
}

function Employee(jobTitle) {
    Person.call(this, name, age)
    this.jobTitle = jobTitle
}

Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.jobTitle}`)
}

let person1 = new Person("Alice", 30)
let employee1 = new Employee("Bob", 25, "Software Engineer")

person1.introduce()
employee1.introduce()

employee1.work()