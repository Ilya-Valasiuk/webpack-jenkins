import './day-style.css';

export function showDay(day, insertPlace) {
    let dayDomObj = $(`
        <li class="day">
            <div class="day-inf">
                <span class="day-date">${day.dayDate.substr(0,5)}</span>
                <span class="day-name">${day.dayName}</span>
            </div>
            <ul data-day="${day.attr}" class="day-body"></ul>
        </li>
    `)[0];
    insertPlace.append(dayDomObj);
}

export function getDayBody(day) {
    return $(`.day-body[data-day="${day.attr}"]`);
}
