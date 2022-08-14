require('colors')

const mostrarMenu = () => {

    return new Promise((resolve, reject) => {
        
        console.clear()
        console.log('========================='.green);
        console.log('  Seleccione una opción  '.green);
        console.log('=========================\n'.green);
    
        console.log(`${'1'.green} Crear tareas`);
        console.log(`${'2'.green} Listar tareas`);
        console.log(`${'3'.green} Listar tareas completadas`);
        console.log(`${'4'.green} Listar tareas pendientes`);
        console.log(`${'5'.green} Completar tarea(s)`);
        console.log(`${'6'.green} Borrar tareas`);
        console.log(`${'0'.green} Salir \n`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
        readline.question('Seleccione una opción ', (opt) =>{
            readline.close()        //para terminar el readline y no esperar más parámetros
            resolve(opt)
        })

    })


}
const pausa = () => {

    return new Promise((resolve, reject) => {
        
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
        readline.question(`Presione ${'ENTER'.green} para continar`, (opt) =>{
            readline.close()        //para terminar el readline y no esperar más parámetros
            resolve()
        })

    })
}

module.exports = {
    mostrarMenu,
    pausa
}