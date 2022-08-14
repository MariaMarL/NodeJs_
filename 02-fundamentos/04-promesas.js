const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];


//____________________________________________________________________________________________________
//** EJERCICIO DE CALLBACKS PERO CON PROMESAS */
//____________________________________________________________________________________________________

const getEmpleado = (id)=>{

    const empleado = empleados.find((s)=> s.id===id)?.nombre

    return new Promise((resolve, rejecte)=>{
        
        (empleado)
            ?resolve(empleado)
            :rejecte(`El empleado no existe, id: ${id}`)
    })
}

const getSalario = (id) => {
    const salario = salarios.find(s => s.id === id)?.salario

    return new Promise((resolve, rejecte) =>{
        (salario)
            ?resolve(salario)
            :rejecte(`No se encontró salario para empleado con id ${id}`)
    })
}
const id = 2;

// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err))


// //***************forma 1 de promesas en cadena***********************
// getEmpleado(id)
//     .then(empleado => {
//         getSalario(id)
//             .then(salario =>{
//                 console.log(`El empleado ${empleado} tiene un salario de ${salario}`)
//             })
//             .catch(err => console.log(err))
//     })
//     .catch(err => console.log(err))

// //****************forma 2 de promesas en cadena***********************
// let nombre;
// getEmpleado(id)
//     .then(empleado => {
//         nombre = empleado;
//         return getSalario(id)
//     })
//     .then(salario => console.log(`El empleado ${nombre} tiene un salario de ${salario}`))
//     .catch(err => console.log(err))



//_________________________________________________________________________________________________________________

//** Async/await ***/

const getInfoUsuarios = async(id) => {
    try {
        const empleado = await getEmpleado(id)
        const salario = await getSalario(id)
        return `El empleado ${empleado} tiene un salario de ${salario}`
    } catch (error) {
        throw error        
    }

}

getInfoUsuarios(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err))


    /* 
    Resumen
    El comando async antes de una función tiene dos efectos:
    
        1) Hace que siempre devuelva una promesa.
        2) Permite que sea usado await dentro de ella.

    El comando await antes de una promesa hace que JavaScript espere 
    hasta que la promesa responda. Entonces:
    
        1) Si es un error, la excepción es generada — lo mismo que si throw error
        fuera llamado en ese mismo lugar.
        2) De otro modo, devuelve el resultado.

    Juntos proveen un excelente marco para escribir código asincrónico 
    que es fácil de leer y escribir.
    
    Con async/await raramente necesitamos escribir promise.then/catch,
    pero aún no deberíamos olvidar que están basados en promesas porque
    a veces (ej. como en el nivel superior de código) tenemos que usar
    esos métodos. 
    También Promise.all es adecuado cuando esperamos por varias tareas simultáneas.
    */