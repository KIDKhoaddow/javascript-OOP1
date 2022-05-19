class Date {
    constructor(day, month, year) {
        this._day = day;
        this._month = month;
        this._year = year;
    }

    Date() {
        console.log(this._day + "/" + this._month + "/" + this._year)
    }

    get day() {
        return this._day
    }

    get month() {
        return this._month
    }

    get year() {
        return this._year
    }

    set day(d) {
        this._day = d;
    }

    set month(m) {
        this._month = m;
    }

    set year(y) {
        this._year = y;
    }

}

let date = new Date(20, 12, 2022)
date.Date()