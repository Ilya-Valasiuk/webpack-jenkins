class Week {

    constructor(date) {
        let month = [ "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        this.year = date.getFullYear();
        this.month = month[date.getMonth()];
        this.dayNames = dayNames;
        this.startWeekDate = date.getTime() - date.getDay() * 24 * 3600 * 1000;
        this.body = '';
    }
}

export default Week;
