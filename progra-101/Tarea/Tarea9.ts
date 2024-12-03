
export function heroesThatStartsWith(namelist: string[], letter:string) {

    let newNamelist: string[] = [];

    // for (let i = 0; i < namelist.length; i++) {
    //     let name = namelist[i];

    //     if (name.startsWith(letter)) {
    //         newNamelist.push (name)
    //     }
    // }

    for( let name of namelist) {
        if (name.startsWith(letter)) {
            newNamelist.push (name);
        }
    }


    return newNamelist;

}

let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let herosWithLetterS = heroesThatStartsWith(heroes, 'S' );  
console.log( herosWithLetterS ); // She Hulk, Spiderman


