console.log('JS is running');

class Vehicle {
    constructor (make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    }  // End Constructor
    honk() {
        return`${this.model} says HONK!`;
    }  // End honk()
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }  // End toString()
}  // End Vehicle Class

class Car extends Vehicle {
    constructor(make, model, year, numWheels){
        super(make, model, year);
        this.numWheels = numWheels || 4;
    }  // End constructor
    toString() {
        return super.toString() + ` It is a car with ${this.numWheels} wheels.`;
    }

}  // End Car Class

class Motorcycle extends Vehicle {
    constructor(make, model, year, numWheels){
        super(make, model, year);
        this.numWheels = 2;
    }  // End constructor
    toString() {
        return super.toString() + ` It is a motorcycle with ${this.numWheels} wheels.`;
    }
    revEngine() {
        return `${this.model} says: VROOM!!!`;
    }
}  // End Motorcycle Class

class Garage {
    constructor(capacity) {
        this.capacity = capacity || 2;
   }  // End Constructor

    vehicles = [];

    add(vehicle) {
        if (vehicle instanceof Vehicle === false){
            console.log('Only vehicles are allowed in here!');
            throw Error(`*** ERROR *** ${vehicle} is not a vehicle. Only vehicles allowed in here!`)
        }
        console.log(`${vehicle.model} is an eligable vehicle.`);
    
        if (this.vehicles.length >= this.capacity){
            console.log(`${vehicle.model} access denied. Sorry, we’re full.`);
            throw Error(' *** GARAGE FULL *** ');
        }
        this.vehicles.push(vehicle);
        return `${vehicle.model} added to garage.`;
    }  // End add()

    // Created an extra method below to check what is currently in the Garage
    checkGarage() {
        console.log('====================');
        console.log('Vehicles in garage:');
        for (let i = 0; i < this.vehicles.length; i++) {
        console.log(`(${i+1}) ${this.vehicles[i].model}`)
        }
        console.log('====================');
    }   // End checkGarage()

}  // End Class Garage

/*
const wifeCar = new Car('Hyundai', 'Ioniq - Blue', 2018, 4);
const boat = 'Fishing Boat'
const myCar = new Car('Mercedes Benz', 'C240', 2022, 4);
const myFirstMotorcycle = new Motorcycle('Yamaha', 'V-Star', 2010)
const myGarage = new Garage(2);
myGarage.add(myCar)
myGarage.checkGarage()

myGarage.add(boat)

myGarage.add(wifeCar)
myGarage.checkGarage()

myGarage.add(myFirstMotorcycle)
*/
