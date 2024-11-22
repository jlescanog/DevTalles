
export let numbers = [1,6,8,4,2,7,10,3,5];
export let maxNumber: number = -99999;



console.log(numbers);

 for (let i = 0; i < numbers.length ; i++) {
    
    if ( numbers[i] >= maxNumber) {
        maxNumber = numbers[i];
    }
 }

 console.log ('El número mayor es:', maxNumber)