import Day from './day-model.js';
import * as dayView from './day-view.js';


function dayController(week) {
    let days = [];
    let dayOfWeek = week.startWeekDate; //miliseconds

    for ( let dayName of week.dayNames ) {
        let dayDate = new Date(dayOfWeek).toLocaleDateString(); //miliseconds to format xx.xx.xxxx
        let day = new Day(dayName, dayDate);
        days.push(day);
        dayOfWeek += 24 * 3600 * 1000;
        dayView.showDay(day, week.body);
        day.body = dayView.getDayBody(day);
    }
    return days;
}

export default dayController;
