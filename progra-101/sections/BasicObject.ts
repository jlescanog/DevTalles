
export let person = {
    name: 'Melisa',
    age: 30,
    isActive: true,
    hobbies: ['soccer','baseball', 'run'],
    toString() {
        let objectString = this.name + ' ' + this.age
        console.log(objectString)
    }
}

console.log ( person.name);

person.toString();

let car = {
    puertas: 4,
    transmision: 'Mecanica',
    combustible: 'Gasolina',
    traccion: 'Trasera'
}

let smartTv = {
    lan: false,
    wifi: true,
    pulgadas: 65,
    sos: 'Android'
}

let youtubeVideo = {
    calidad: 'HD',
    subtitulo: true,
    descarga: false,
    seguidores: 10000,
    comentarios: ['Me gusta','Recomendado','Te seguire']
}

console.log (car);
console.log (smartTv);
console.log (youtubeVideo);