const { options } = require('yargs')

// //metodo malo --> sólo con fines educativos
// //destructuración para obtener el 3 elemento que es la base
// const [, , arg3 = 'base=5'] = process.argv
// const [, base=5] = arg3.split('=')
// //let base=5;

//__________________________________________________
// //Metodo anterior pero con YARGS
// console.log('********************');
// console.log(argv);
// console.log('base yargs:'+ argv.base);

// const base = yargss.argv.b
// //console.log(yargs.argv);
// let listar=yargss.argv.l 

const yargss = require('yargs')
.option('b',{
    alias:'base',
    type:'number',
    demandOption:true,
    describe : 'Base de la tabla de multiplicar'
}).check((argv, options)=>{
    if(isNaN(argv.b)){
        throw 'la base debe ser un número'
    }
    return true
})
.option('l',{
    alias:'listar',
    type:'boolean',
    demandOption:true,
    describe: 'Muestra la tabla',
    default:false
}).option('h',{
    alias:'hasta',
    type:'number',
    demandOption:true,
    describe:'limite del multiplicador',
    default:10
})
.argv

module.exports ={
    yargss
}