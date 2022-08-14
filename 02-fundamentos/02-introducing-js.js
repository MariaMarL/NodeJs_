
// /****Template String ***/

// let nombre = 'Maria'
// let apellido = 'Lamilla'

// let nombreCompleto_concatenar = 'Hola ' + nombre + ' ' + apellido
// let nombreCompleto_TemplateString = `Hola ${nombre} ${apellido}`
// ________________________________________________________________________________________________________________


// /**** Destructuración de objetos****/
// const deadpool = {
//     nombre: 'Wade',
//     apellido: 'Winston',
//     poder: 'Regeneración',
//     getNombre(){
//         return `${this.nombre } ${this.apellido } ${this.poder}`
//     }
// }

// const {nombre, apellido, poder, edad=0} = deadpool;
// console.log(nombre, apellido, poder);

// const heroes = ['Deadpool', 'Superman', 'Batman']
// // const h1 = heroes[0]
// // const h2 = heroes[1]
// // const h3 = heroes[2]
// const [h1, h2, h3] = heroes;
// const [ , , h4] = heroes  //sólo agarrar un elemento


// ________________________________________________________________________________________________________________

// /**** Arrow Functions ****/

// //Función tradicional
// function sumar (a, b = 10){
//     return a + b;
// }

// //función flecha
// const restar = (a, b=10) => {
//     return a + b
// }
// const multiplicar = (a, b=10) => a + b 

// const saludar = () => console.log('Hola!'); 

// ________________________________________________________________________________________________________________

// /*** Callbacks ****/
// /* Función que se envía como parámetro a otra función y será ejecutada después de cierto punto del tiempo */
// /** Una función de callback es una función que se pasa a otra función como un argumento, 
//     que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.**/


// /**____Eg1_________**/
// function saludar(nombre) {
//     console.log('Hola ' + nombre);
//     }
    
// function procesarEntradaUsuario(callback, nombre1) {
// var nombre = console.log('Por favor ingresa tu nombre.');
// callback(nombre1);
// }

// procesarEntradaUsuario(saludar, 'maria')
// procesarEntradaUsuario(saludar);


// /***____Eg 2__________**/  //ESTE EJEMPLO ME GUSTÓ MUCHO, MUY CLARO
// const operation = (num1, num2,op) =>{   //aqui le paso una función que voy a utilizar
// return op(num1, num2)               //aquí uso la función que le pasé anteriormente
// }
// operation(1, 2, (a, b)=> a + b )       //Llamo la función, pasandole los parámetros y la funcion op.
// operation(1, 2, (a, b)=> a - b )       //que puede variar en cada llamado.
// operation(1, 2, (a, b)=> a * b )
// operation(1, 2, (a, b)=> a / b )
// //_________________________________________________________________________________________________________________

