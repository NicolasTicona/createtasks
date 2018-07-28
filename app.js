const {argv} = require('./config/yargs')
const colors = require('colors')

const {crearTarea, listarTareas, actualizarTarea, borrarTarea} = require('./por-hacer/por-hacer')

let comando = argv._[0]

switch(comando){
    case 'crear':
        let tarea = crearTarea(argv.descripcion)
        console.log(tarea)
        break
    
    case 'listar': 
        let tareas = listarTareas(argv.completado)
        
        console.log('======== Tareas ========='.gray);
        for(let tarea of tareas){
            console.log(`${tarea.descripcion}`.yellow);
            console.log(`Estado: ${tarea.estado}`.green);
        }
        console.log('========================='.gray);
        break
    
    case 'actualizar':
        let actualizado  = actualizarTarea(argv.descripcion, argv.completado)
       
        if (actualizado) console.log('Tarea Finalizada'); 
        else console.log('No hubo coincidencias');
        
        break

    case 'borrar': 
        let borrado = borrarTarea(argv.descripcion)

        if (borrado) console.log('Tarea Borrada');
        else console.log('No se encontró coincidencias');

        break

    default:
        console.log('Comando no reconocido');    
}