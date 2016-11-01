import './../common/style/reset.css';

import weekController from './week/week-controller.js';
import dayController from './day/day-controller.js';
import timeController from './time/time-controller.js';
import taskController from './task/task-controller.js';

(function init() {
    let week = weekController();
    let days = dayController(week);
    timeController(days, week);
    taskController(days);
})();
