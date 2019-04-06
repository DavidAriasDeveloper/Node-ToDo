
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    demand: false,
    default: true,
    alias: 'c',
    desc: 'Estado de la tarea'
}

const argv = require('yargs')
                .command('listar', 'Listar tareas', { completado: {
                    alias: 'c',
                    demand: false,
                    desc: 'Filtro de tareas completadas'
                } })
                .command('crear', 'Crear una nueva tarea', { descripcion })
                .command('actualizar', 'Actualizar el estado de una tarea', { descripcion, completado })
                .command('borrar', 'Borrar una tarea', { descripcion })
                .help()
                .argv;

module.exports = {
    argv
}