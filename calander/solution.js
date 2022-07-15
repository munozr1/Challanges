"use strict";
exports.__esModule = true;
exports.getDaysInMonth = void 0;
/**
 * @param {int} The month number, 0 based
 * @param {int} The year, not zero based, required to account for leap years
 * @return {String[]} List with date objects for each day of the month
 */
function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var day = new Date(date.getTime() - 86400000);
    console.log("prev day", day);
    var days = [];
    while (date.getMonth() === month || date.getDay() !== 0) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    while (days[0].getDay() !== 0) {
        days.unshift(new Date(day));
        //subtract a day from day to get the previous day
        day.setDate(day.getDate() - 1);
        console.log("😡");
    }
    console.log("previous day: ", -1);
    return days;
}
exports.getDaysInMonth = getDaysInMonth;
console.log("🗓  Calendar: ", getDaysInMonth(6, 2022));
