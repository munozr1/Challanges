/**
 * @param {int} The month number, 0 based
 * @param {int} The year, not zero based, required to account for leap years
 * @return {String[]} List with date objects for each day of the month
 */
export function genMonth(month: number, year: number): any[] {
  const date = new Date(year, month, 1);
  let day = new Date(date.getTime() - 86400000);
  let days: Date[] = [];

  while (date.getMonth() === month || date.getDay() !== 0) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  while (days[0].getDay() !== 0) {
    days.unshift(new Date(day));
    day.setDate(day.getDate() - 1);
  }
  return days;
}
