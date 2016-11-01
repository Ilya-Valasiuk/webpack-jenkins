function taskView(task) {
    let insertPlace = $(`.day-body[data-day="${task.date}"] .hour[data-hour="${task.hour}"]`);
    insertPlace.addClass("event");
    insertPlace.append(task.todo);
}

export default taskView;
