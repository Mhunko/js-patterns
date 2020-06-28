//pattern allows to avoid creating an object that already exists
//can be used for example to not to download same image second time for a webside

class Car{
    constructor(model, price) {
        this.model= model
        this.price = price
    }
}

class CarFactory{
    constructor() {
        this.cars = []
    }
    create(model, price){
        const candidate = this.getCar(model)
        if(candidate){
            return candidate
        }
        const newCar = new Car(model, price)
        this.cars.push(newCar)
        return newCar
    }
    getCar(model){
        return this.cars.find(car => car.model === model)
    }
}

const factory = new CarFactory()

const toyota1 = factory.create('Toyota', 12000)
const audi = factory.create('Audi', 15000)
const toyota2 = factory.create('Toyota', 5000)

console.log(toyota1)
console.log(toyota2)
console.log(toyota1 === toyota2)