class Car {
    brand: string;
    doors: number;
    fuelTank: number;
    isRunning: boolean;
    type: string;

    createdAt: number;

    constructor() {
        this.brand = 'No Brand';
        this.doors = 0;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = 'No type';

        this.createdAt = 123456789;
    }

    turnOn() {
        if (this.isRunning) {
            console.log ('El carro ya estaba encendido y se daño el carro');
            return;
        }
        if (this.fuelTank <= 0 ) {
            console.log ('El carro no tiene gasolina');
            return;
        }

        this.isRunning = true;
        console.log ('El carro está encendido');
    }

    /*
    gas: number
    gas > 100, this.fulltank = 100
    gas tiene que ser positivo
    si ya esta llenon no sobre llenar
    si el tanque es de 50 y añado 20, el valor del fueltank seria 70
    si fueltank es 90, y añado 50, fueltank deberia de ser 100
    */

    fillTank (gas: number) {
    if (this.fuelTank = 100) {
        console.log ('Tanque lleno, no sobre llenar')
        return;
    }
    

    }
}

let myMazda = new Car ();

console.log(myMazda);
myMazda.fillTank(50);
myMazda.turnOn();
console.log(myMazda);

