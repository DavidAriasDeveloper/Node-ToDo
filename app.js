const argv = require('./config/yargs').argv;
const colors = require('colors');
const toDo = require('./to-do/to-do');

//console.log(argv);

let command = argv._[0];

switch(command){
    case 'crear':
        console.log(toDo.create(argv.descripcion));
        break;
    case 'listar':
        let list = toDo.getList();

        if(argv.completado){
            list = list.filter(task => task.completed );
        }
        
        list.map((task) => {
            console.log("======Por Hacer======".green);
            console.log(task.description);
            console.log("Estado: ",task.completed);
            console.log("=====================".green);
        });
        break;
    case 'actualizar':
        let updated = toDo.update(argv.descripcion, argv.completado);
        console.log(updated);
        break;
    case 'borrar':
        let removed = toDo.remove(argv.descripcion);
        console.log(removed);
        break;
    default:
        console.log('Comando no reconocido');
}