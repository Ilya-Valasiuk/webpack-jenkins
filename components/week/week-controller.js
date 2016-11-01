import Week from './week-model.js';
import * as weekView from './week-view.js';

function weekController() {
    let week = new Week(new Date());
    weekView.showWeek(week, $("body"));
    week.body = weekView.getBody();
    return week;
}

export default weekController;
