const fs = require('fs');
let listaTareas = [];

const crear = (tarea) => {
    cargarDB();

    let newTarea = {
        tarea: tarea,
        completado: false
    }

    listaTareas.push(newTarea);
    guardarDB();
    return newTarea;
}

const guardarDB = () => {
    return new Promise((resolve, reject) => {

        let data = JSON.stringify(listaTareas);


        fs.writeFile('db/data.json', data, (err) => {
            if (err) reject('No se pudo guardar las tareas');
            resolve('Se guardaron las tarea');
        })
    })
}


const actualizar = (tareaDescription, completado = true) => {
    cargarDB();
    let index = listaTareas.findIndex(tareas => {
        return tareas.tarea === tareaDescription;
    });
    if (index >= 0) { //Posicion del arreglo
        listaTareas[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const eliminar = (tareaDescription) => {
    cargarDB();
    let nuevoListado = listaTareas.filter(tarea => {
        return tarea.tarea !== tareaDescription;
    })

    if (nuevoListado.length == listaTareas.length) {
        return false;
    } else {
        listaTareas = nuevoListado;
        guardarDB();
        return true;
    }
}

const cargarDB = () => {

    try {
        listaTareas = require('./db/data.json');

    } catch (err) {
        listaTareas = [];
    }

}

const getListado = () => {
    cargarDB();
    return listaTareas;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar
}