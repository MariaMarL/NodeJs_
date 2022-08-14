const Tarea = require("./tarea");

class Tareas {
    _listado = {};

    //metodo getter para obtener el listado de tareas como un arreglo y no como un objeto
    get listadoArr(){

        const listado = [];

        //la funcion Object.keys permite retornar todas las llaves
        Object.keys(this._listado).forEach(key =>{
            //voy a buscar una tarea por cada llave encontrada
            const tarea = this._listado[key];
            //agrego cada tarea al listado
            listado.push(tarea)

        })
        return listado;
    }

    constructor(){
        this._listado = {};
    }

    crearTarea(desc = ''){
        //Instancia de la clase tarea
        const tarea = new Tarea(desc);
        //agrego la tarea por id al *_listado*
        this._listado[tarea.id] = tarea
    }

}
module.exports = Tareas