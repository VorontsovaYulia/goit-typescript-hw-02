/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days {
  Sunday = 1,
  Monday = 0,
  Tuesday = 0,
  Wednesday = 0,
  Thursday = 0,
  Friday = 0, 
  Saturday = 1,
};

function isWeekend(day:Days):boolean {
  if (day === 0) {
    return false
  } 
    return true;
};
