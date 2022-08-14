require('colors')
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const {inquirerMenu, pausaMenu, leerInput} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


console.clear()
//** Con Inquirer***/
const main = async() => {

    let opt = '';
    let tareas = new Tareas();
    const tareasDB = leerDB();

    if(tareasDB){
        //establecer tareas
    }
    (opt !=='0')&& await pausaMenu();

    //Repite el menú simpre que la opción se diferente de 0;
    do {
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                //crear tarea
                const desc = await leerInput('Descripción: ')
                tareas.crearTarea(desc);
                break;
            case '2':
                //mostrar listado de tareas
                console.log(tareas.listadoArr);
                break;
        

        }

        //guardarDB(tareas.listadoArr);

        
    } while (opt !== '0');
}


// //__________________________________________________________________________________
// //**Sin inquirer  ***/
// const { mostrarMenu, pausa } = require('./helpers/mensajes');

// console.clear()

// const main = async() => {
//     console.log('hola mundo');
//     let opt = '';
//     do {
//         opt = await mostrarMenu()
//         console.log({opt});
//         //**ternary operator
//         //(opt !=='0')? await pausa(): null; 
//         //**another way to do an if
//         (opt !=='0')&& await pausa()
        
//     } while (opt !== '0');
// }

main();