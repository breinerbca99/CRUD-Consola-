const tarea = {
    demand: true,
    alias: 't',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: false,
    alias: 'c',
    desc: 'Marca como complementado la tarea'
}


const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {
        tarea,
        completado
    })
    .command('listar', 'Crea una tarea por hacer', {

    })
    .command('actualizar', 'Crea una tarea por hacer', {
        tarea,
        completado
    })
    .command('eliminar', 'Elimina una tarea', {
        tarea
    })
    .help()
    .argv;


module.exports = {
    argv
}