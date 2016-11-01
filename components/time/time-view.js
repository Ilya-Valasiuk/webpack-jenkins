import './time-style.css';

export function showTimeHint(insertPlace) {

    let timeHint = $(`<li class="time-hint"><ul class="time-hint-body"></ul></li>`);
    insertPlace.prepend(timeHint[0]);

    let timeHintBody = $(".time-hint-body");
    for (let i = 6; i < 24; i++) {
        timeHintBody.append($(`<li>${i}</li>`)[0]);
    }
}

export function showTime(insertPlace) {
    for (let i = 6; i < 24; i++) {
        insertPlace.append($(`<li data-hour="${i}" class="hour"></li>`)[0]);
    }
}
