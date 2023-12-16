import {constWeekDayNames, constWeekDayNamesShortened} from "./constants";

export const sortLessonsByTime = (lessons: LessonData[]) =>
  lessons.sort((a: LessonData, b: LessonData): number => {
    return +new Date('1970/01/01 ' + a.time) - +new Date('1970/01/01 ' + b.time);
  });

/** Получает CustomDate для всех дней недели, которй принадлежит заданный день. **/
export const getCurrentWeek = (currentDate: CustomDate) => {
  const daysOfWeek: CustomDate[] = [];
  // Рассчитываем разницу между текущим днем недели и понедельником
  const diff: number = currentDate.weekDayIndex - 1; // 1 - понедельник

  // Рассчитываем новую дату, начиная с предыдущего понедельника
  const mondayDate: Date =
    new Date(customDateToDayObj(currentDate).getTime() - diff * 24 * 60 * 60 * 1000);

  // Получаем даты для понедельника, вторника, ..., пятницы
  for (let i = 0; i < 5; i++) {
    const newDate: Date = new Date(mondayDate.getTime() + i * 24 * 60 * 60 * 1000);
    daysOfWeek.push(customDateFromDateObj(newDate));
  }

  return daysOfWeek;
}

export const customDateFromDateObj = (dateObj: Date) => {
  const weekDayIndex = dateObj.getDay();
  return {
    day: dateObj.getDate(),
    month: dateObj.getMonth() + 1,
    year: dateObj.getFullYear(),
    weekDayIndex: weekDayIndex,
    weekDayFullName: constWeekDayNames[weekDayIndex],
    weekDayShortName: constWeekDayNamesShortened[weekDayIndex]
  } as CustomDate;
}

export const customDateFromValues = (day: number, month: number, year: number) => {
  const dateObj = new Date(year, month-1, day);
  const weekDayIndex = dateObj.getDay();
  const weekDayFullName = constWeekDayNames[weekDayIndex];
  const weekDayShortName = constWeekDayNamesShortened[weekDayIndex];
  return { day, month, year, weekDayIndex, weekDayFullName, weekDayShortName } as CustomDate;
}

export const customDateNow = customDateFromDateObj(new Date(Date.now()));

export const parseDateString = (date: string, format: 'dd-mm-yyyy' | 'yyyy-mm-dd' = 'dd-mm-yyyy') => {
  const values = date.split('-');
  let day, month, year;
  if (format === 'dd-mm-yyyy') {
    day = parseInt(values[0]);
    month = parseInt(values[1]);
    year = parseInt(values[2]);
  } else {
    day = parseInt(values[2]);
    month = parseInt(values[1]);
    year = parseInt(values[0]);
  }
  const dateObj = new Date(day, month-1, year);
  const weekDayIndex = dateObj.getDay();
  const weekDayFullName = constWeekDayNames[weekDayIndex];
  const weekDayShortName = constWeekDayNamesShortened[weekDayIndex];
  return { day, month, year, weekDayIndex, weekDayFullName, weekDayShortName } as CustomDate;
}

export const customDateToDayObj = (date: CustomDate) =>
  new Date(date.year, date.month-1, date.day);

export const customDateToString = (date: CustomDate, format: 'dd-mm-yyyy' | 'yyyy-mm-dd' = 'dd-mm-yyyy') => {
  const dayStr = numberToFixedLength(date.day, 2);
  const monthStr = numberToFixedLength(date.month, 2);
  const yearStr = numberToFixedLength(date.year, 4);
  return format === 'dd-mm-yyyy' ?
    `${dayStr}-${monthStr}-${yearStr}` :
    `${yearStr}-${monthStr}-${dayStr}`;
}

/** Добавляет указанное количество минут к объекту времени. **/
export const addMinutesDate = (date: Date, minutes: number) => {
  if (!date) return null;
  return new Date(date.getTime() + minutes*60000);
}

/** Складывает строковые значения времени
 ** @param {string} t0 : time in [-]h[:mm[:ss]] format
 ** @param {string} t1 : time in same format as t0
 ** @returns {string} summ of t0 and t1 in h:mm:ss format
 **/
export const addTimes = (t0: string, t1: string) => {
  const secs0 = timeToSecs(t0);
  const secs1 = timeToSecs(t1);
  return secs0 && secs1 ? secsToTime(secs0 + secs1) : t0;
}

// Convert time in H[:mm[:ss]] format to seconds
export const timeToSecs = (time: string) => {
  let sign = /^-/.test(time);
  const match = time.match(/\d+/g);
  if (match?.length) {
    const h = parseInt(match[0]);
    const m = parseInt(match[1]);
    const s = parseInt(match[2]);
    return (sign? -1 : 1) * (h*3600 + (m|0)*60 + (s | 0));
  }
  return null;
}

// Convert seconds to time in H:mm:ss format
export const secsToTime = (seconds: number) => {
  let sign = seconds < 0? '-':'';
  seconds = Math.abs(seconds);
  let z = (n: number) => (n<10?'0':'') + n;
  return sign +
    z(seconds / 3600 | 0) + ':' +
    z((seconds%3600) / 60 | 0) + ':' +
    z(seconds%60);
}

/** Приводит число к строку фиксированной длины, добавляя незначащие нули. **/
export const numberToFixedLength = (n: number, length: number) => {
  const nString = n.toString();
  const nullsAmount = length - nString.length;
  return nullsAmount > 0 ? '0'.repeat(nullsAmount) + nString: nString;
}
