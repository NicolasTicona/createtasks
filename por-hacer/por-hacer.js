const fs = require('fs')

let listadoTareas = []

const guardarDB = () => {

    let data = JSON.stringify(listadoTareas)

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar')
    })
}

const cargarDB = () => {

    try {

        listadoTareas = require('../db/data.json')
    
    } catch (error) {
        
        listadoTareas = []
    }

}

const crearTarea = (descripcion) => {

    cargarDB()

    let tarea = {
        descripcion,
        estado: false
    }

    listadoTareas.push(tarea)

    guardarDB()

    return tarea
}

const listarTareas = (estado) => {

    cargarDB()

    let tareas_estado = []

    if(estado === 'true') tareas_estado = listadoTareas.filter( tarea => tarea.estado === true)
    else if(estado === 'false') tareas_estado = listadoTareas.filter( tarea => tarea.estado === false)
    else tareas_estado = listadoTareas

    return tareas_estado
}

const actualizarTarea = (descripcion, estado = true) => {

    cargarDB()

    let index = listadoTareas.findIndex( tarea => tarea.descripcion === descripcion )
    
    if (index >= 0) {
        listadoTareas[index].estado = estado;
        guardarDB()

        return true
    }

    else{
        return false
    }

}

const borrarTarea = (descripcion) => {

    cargarDB()

    let index = listadoTareas.findIndex( tarea => tarea.descripcion === descripcion)

    if(index >= 0) {
        listadoTareas.splice(index, 1)

        guardarDB()

        return true
    }

    else{
        return false
    }

}

module.exports = {
    crearTarea,
    listarTareas,
    actualizarTarea,
    borrarTarea
}