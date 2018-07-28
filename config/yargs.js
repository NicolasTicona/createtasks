const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
}

const completado = {
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un nueva tarea', {
        descripcion
    })
    .command('listar', 'Listar las tareas', {
        completado
    })
    .command('actualizar', 'Actualiza el estado de la tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra la tarea', {
        descripcion
    })
    .help()
    .argv

module.exports = {
    argv
}