//pt 1.
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep.";
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}




///pt. 2
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep.";
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);  // Call the parent class constructor
        this.numWheels = 4;
    }
}

//pt 3.
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep.";
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);  // Call the parent class constructor
        this.numWheels = 2;
    }

    revEngine() {
        return "VROOM!!!";
    }
}

//pt 4.
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep.";
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);  // Call the parent class constructor
        this.numWheels = 2;
    }

    revEngine() {
        return "VROOM!!!";
    }
}

