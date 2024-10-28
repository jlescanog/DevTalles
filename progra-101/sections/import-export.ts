
import { 
    addTwoNumbers, 
    divideTowNumbers, 
    substracTowNumbers, 
    timesTowNumbers 
} from "../helpers/math-helpers";

let num1 = 10;
let num2 = 20;

let total1: number = addTwoNumbers (num1,num2);
let total2: number = substracTowNumbers (num1,num2);
let total3: number = timesTowNumbers (num1,num2);
let total4: number = divideTowNumbers (num1,num2);

console.log('add: ', total1);
console.log('susbtract: ', total2);
console.log('Times: ', total3);
console.log('Divide: ', total4);