const argv = require('./config/yargs').argv;
const tareas = require('./tareas');
var colors = require('colors');
console.log(argv);
comando = argv._[0];



switch (comando) {
    case 'crear':
        let Newtarea = tareas.crear(argv.tarea);
        console.log(Newtarea);
        break;
    case 'listar':
        let listado = tareas.getListado();
        for (let tarea of listado) {
            console.log('====TAREAS====='.green);
            console.log(tarea.tarea);
            console.log(`ESTADO:${tarea.completado}`);
            console.log('==============='.green);
        }

        break;
    case 'actualizar':
        let actualizado = tareas.actualizar(argv.tarea, argv.completado);
        console.log(actualizado);
        break;
    case 'eliminar':
        let eliminado = tareas.eliminar(argv.tarea);
        console.log(eliminado);
        break;
    default:
        console.log('Comando no reconocido');
}