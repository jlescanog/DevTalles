
console.log('Hola Mundo');

export let weekDay:number = 0;//1= Lunes, 2= Martes, 3= Miercoles

if( weekDay <= 0) {
    
    //throw new Error('Dia de la semana no permitido');
}

switch (weekDay) {
    case 1:
        console.log('Es Lunes');
        break;
    case 2:
        console.log('Es Martes');
        break;
    case 3:
        console.log('Es Miercoles');
        break;
    case 4:
        console.log('Es Jueves');
        break;
    default:
        console.log('No es Lun, Mar, Mir o Jue.');
}
