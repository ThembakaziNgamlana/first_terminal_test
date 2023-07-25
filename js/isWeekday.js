export function isWeekday(day) {
    return (
      day.startsWith("Mon") ||
      day.startsWith("Tue") ||
      day.startsWith("Wed") ||
      day.startsWith("Thu") ||
      day.startsWith("Fri")
    );
  }