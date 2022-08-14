//import { crearArchivo } from './helpers/multiplicar';
const {crearArchivo} = require('./helpers/multiplicar')
const {yargss} = require('./config/param_consol')


crearArchivo(yargss.b, yargss.l, yargss.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err=> console.log(err))




