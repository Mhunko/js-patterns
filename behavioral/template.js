class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    responsibilities(){

    }

    work() {
        return `${this.name}, works on ${this.responsibilities()}`
    }
    getPaid() {
        return `${this.name} got paid ${this.salary}`
    }
}

class Developer extends Employee{
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return `software development creation process`
    }
}

class Tester extends Employee{
    constructor(name, salary) {
        super(name, salary)
    }
    responsibilities() {
        return `testing process`
    }
}

const dev = new Developer('Maks', 50000)
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Roger', 60000)
console.log(tester.getPaid())
console.log(tester.work())