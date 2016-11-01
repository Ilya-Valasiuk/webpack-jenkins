import './week-style.css';

export function showWeek( week, insertPlace) {
    let weekDomObj = $(`
        <div class="week">
            <div class="week-inf">
                <span class="month">${week.month}</span>
                <span class="year">${week.year}</span>
            </div>
            <ul class="week-body"></ul>
        </div>
    `)[0];
    insertPlace.append(weekDomObj);
}

export function getBody() {
    return $(".week-body");
}
