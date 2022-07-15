/*
For this Challenge, you will write a function that returns an array of all days in a month.
The return array should contain exactly 42 dates every time the function is called.

The function must return the days in a month dynamically for any given month of any given year.
The first index of the array MUST be sunday and the last index in the array MUST be saturday.
To fill in the blanks you must include previous and future months in the array.

They date must be in the format of :
Sun Dec 26 1969 00:00:00 GMT-0600 (Central Standard Time)


An application example is provided as a png file in the repo.


DO NOT:
1. Talk
2. Ask questions (except Gil)
3. Look up anything anywere (google etc.)
4. Cheat / Coluding
5. Look up any previous code you have written
*/

/**
 * @param {int} The month number, 0 based (0 = January)
 * @param {int} The year, not zero based, required to account for leap years
 * @return {Date[]} List with date objects for each day of the month
 */
export function getDaysInMonth(month: number, year: number): Date[] {
  console.log("Running 🔄");
  //TODO write code here
  console.log("Finished ✅");
  return [];
}

console.log("🗓  : ", getDaysInMonth(0, 1969));
// To test your function, run:
// tsc index.ts
// node index.js
