 export class Car {

    static className = 'Carro';

    public readonly brand: string;
    public doors: number;
    public fuelTank: number;
    public isRunning: boolean;
    public type: string;

    private readonly createdAt: number;

    constructor( brand: string, type:string) {
        this.brand = brand;
        this.doors = 0;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = type;

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
        if (gas <= 0) {
            console.log('Gas NO es positivo');
            return;
        }
        let newFuelTank = this.fuelTank + gas;

        if (newFuelTank >= 100 ) {
            this.fuelTank = 100;
        } else {
            this.fuelTank = newFuelTank;
        }
    }


    
}

let myMazda = new Car ('Mazda','Sedan');
//myMazda.brand = 'Mazda';
//myMazda.type = 'Sedan';

console.log(myMazda);
myMazda.fillTank(2020);
myMazda.turnOn();
console.log(myMazda);

