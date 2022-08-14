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

const encontrarSalario = (id, callback)=>{
    const salario = salarios.find((s)=> s.id===id)?.salario

    if(salario){
         callback(null, salario)
    }else{
         callback(`El empleado no existe, id: ${id}`)
    }

}

const id=1;

encontrarSalario(id, (err, salario)=>{

    if(err) console.log(err);

    console.log(`El salario es ${salario}`);

})