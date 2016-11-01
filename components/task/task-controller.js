import Task from './task-model.js';
import  taskView from './task-view.js';

function taskController(days) {
    let taskList = [
        "Sleep :)",
        "Go to eat",
        "Plant a Tree",
        "Be happy",
        "Don't worry",
        "Change the world",
        "Go To A Strip-Club"
    ];
    let tasks = [];

    for (let task of taskList) {
        let taskHour = Math.floor( Math.random() * (23 - 6 + 1) +6);
        task = new Task(days[Math.floor(Math.random() * 6)].dayDate, taskHour, task);
        tasks.push(task);
        taskView(task);
    }

    return tasks;
}

export default taskController;
