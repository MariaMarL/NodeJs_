// import inquirer from 'inquirer';
const inquirer = require('inquirer');
require('colors');

//Se crea una pregunta
//Creación de las opciones que se mostrarán en el menú
const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message:'¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tarea`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name:`${'0.'.green} Salir `
            }
        ]    
    }
]

//creación de la pausa después de seleccionar una opción
const pausa = [
    {
        type: 'input',
        name: 'optPausa',
        message:`Presione ${'enter'.green} para continuar`,
    }
]

//Se recibe la opción a través de la funcion creada menuOpts
//y se guarda su valor en la variable *opción* para utilizarla después
const inquirerMenu = async() => {

    console.clear()
    console.log('========================='.green);
    console.log('  Seleccione una opción  '.green);
    console.log('=========================\n'.green);

    const {opcion} = await inquirer.prompt(menuOpts)
    return opcion
}

//se recibe el enter pedido en la pausa, para esto se utiliza la función creada pausa y se guarda
//su valor en la variable *optPausa*
const pausaMenu = async() => {
     const {optPausa} = await inquirer.prompt(pausa)
     return optPausa
}

//Función para preguntar al usuario dependiendo del input
const leerInput = async(mensaje) =>{

    //se crea la pregunta
    const question = [
        {
        type: 'input',
        name: 'desc',
        message:mensaje,
        validate(value){
            if(value.length === 0) {
                return 'Por favor ingrese un valor';
            }
            return true;
        }
    }
    ];

    const {desc} = await inquirer.prompt(question);
    return desc;
}


module.exports = {
    inquirerMenu,
    pausaMenu,
    leerInput
}
