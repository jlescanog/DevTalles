export interface Person {
    name: string;
    age: number;
    isActive: boolean;
}


export let fernado: Person = {
    name: 'Fernando',
    age: 36,
    isActive: true
}

export let juan: Person = {
    name: 'Juan',
    age: 30,
    isActive: true
}

export let melisa: Person = {
    name: 'Melisa',
    age: 42,
    isActive: false
}

let people: Person[] = [fernado, melisa, juan];

for(let i = 0; i < people.length; i ++) {
    let person = people[i];
    console.log(person.name+' tiene '+ person.age);
}