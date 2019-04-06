const fs = require('fs');

let listToDo = [];

const getList = () => {
    loadDB();
    return listToDo;
}

const update = (description, completed = true) => {
    loadDB();
    let index = listToDo.findIndex( task => task.description === description);

    if ( index >= 0) {
        listToDo[index].completed = completed;
        saveDB();
        return true;
    }else{
        return false;
    }
}

const remove = (description) => {
    loadDB();
    let removed; 
    let newListToDo = listToDo.filter( task => {
        removed = task;
        return task.description != description
    });
    if(newListToDo.length === listToDo.length){
        return false;
    }else{   
        listToDo = newListToDo;
        saveDB();
        return removed;   
    }
}

const saveDB = () => {
    let data = JSON.stringify(listToDo);
    fs.writeFile("db/data.json", data , (err) => {
        if(err){
            throw new Error('No se pudo grabar', err);
        } 
    });
}

const loadDB = () => {
    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }
}

const create = (description) => {
    loadDB();

    let toDo = {
        description,
        completed: false
    };

    listToDo.push(toDo);
    saveDB();
    return toDo;
}

module.exports = {
    create,
    update,
    remove,
    getList
}