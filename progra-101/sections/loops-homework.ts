
export let base:number = 10;
export let limit:number = 50;

// for ( let i = 1; i <= limit; i++) {
//   console.log(base, 'x',i, ' = ', base * i);
// } 

let i = 1;

// while (i <= limit) {
//   console.log( base, ' x ', i, ' = ', base * i++);
// }

 do {
   console.log( base, ' x ', i, ' = ', base * i++);
 } while (i <= limit);