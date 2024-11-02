
export let people: string[] = ['Fernando', 'Jhair', 'Edudardo'];
export let salaries: number[] = [1500, 2400, 3200];
//let flowers: string[] = ['Rosa','Girasol','Lirio'];

// if (people[1]) {
//     console.log(people[2]);
// }


//Tarea recorrer cada rosa o posicion:
// let limit: number = 2

// for (let i = 0; i <= limit; i++) {
//     console.log(flowers[i]);
    
// }

//ejemplo uso de length:
// for (let i = 0; i < flowers.length ; i++) {
//     console.log(flowers[i]);
    
// }

//TAREA 
for ( let i = 0; i < people.length ; i++) {
    console.log (people[i],'tiene un salario de: ', salaries[i] );
}

//otra SOLUCION;
for (let index = 0; index <= people.length -1 ; index++ ) {
    let personas = people[index];
    let sueldos = salaries[index]; 

    console.log( personas +' tiene un salario de: ' +sueldos)

}