/** Добавляет указанное количество минут к объекту времени. **/
export const addMinutes = (date: Date, minutes: number) => {
  if (!date) return null;
  return new Date(date.getTime() + minutes*60000);
}

/** Приводит число к строку фиксированной длины, добавляя незначащие нули. **/
export const numberToFixedLength = (n: number, length: number) => {
  const nString = n.toString();
  const nullsAmount = length - nString.length;
  return nullsAmount > 0 ? '0'.repeat(nullsAmount) + nString: nString;
}
