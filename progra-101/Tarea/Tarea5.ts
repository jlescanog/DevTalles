
export let numbers = [1,6,8,4,2,7,10,3,5];
let esPar: number = 0
let noEsPar: number =1

for (let i = 0; i < numbers.length -1; i++) {
    
    let number: number = numbers[i];

    if ((number % 2 ) === 0) {
        console.log(number, 'es par')
    } else {
        console.log(number, 'es impar')
    }
    
}