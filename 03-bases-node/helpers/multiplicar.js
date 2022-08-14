//import { Module } from "module";
const fs = require('fs')
const colors = require('colors/safe');
//import { writeFile } from 'fs';


const crearArchivo = async(base=5, listar, hasta) =>{
    try {
        let salida = ''
        let nombreArchivo = `  TABLA DEL ${base}    `

        for(let i = 0; i<hasta+1; i++){
            salida += `${base} X ${i}= ${base*i}\n`
        }
        (listar)?console.log(colors.random(salida)):console.log('');
        fs.writeFileSync(`./salida/Tabla-${base}-hasta-${hasta}.txt`, salida)

        // // fs.writeFile(`tabla${base}.txt`, salida, (err) =>{
        // //     if (err) throw err;
        // //     console.log('The file has been saved!');
        // // })
        return(`tabla-${base}.txt creado`);
    } catch (err) {
        throw err
    }

    

    //Para escribir también el encabezado de la tabla se puede poner en un template string.
// fs.writeFile(`tabla${base}.txt`, salida, (err) =>{
//     if (err) throw err;
//     console.log('The file has been saved!');
// })
// console.log(salida);

}

module.exports = {
    crearArchivo
}