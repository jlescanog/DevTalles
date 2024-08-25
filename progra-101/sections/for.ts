
export let limite:number = 100

for (let i = 1; i <= limite; i++) {
    console.log('let i:', i);

    if ( i === 5) {
        continue
        //break para parar el programa;
    }
}
console.log('Fin de programa');
