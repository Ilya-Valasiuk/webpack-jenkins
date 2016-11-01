import * as timeView from './time-view.js';

function timeController(days, week) {
    timeView.showTimeHint(week.body);
    for (let day of days) {
        timeView.showTime(day.body);
    }
}

export default timeController;
