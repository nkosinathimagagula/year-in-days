import type { CalendarDay, YearProgress } from "../types";

export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function getDaysInYear(year: number): 365 | 366 {
  return isLeapYear(year) ? 366 : 365;
}

export function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

export function getYearProgress(): YearProgress {
  const now = new Date();
  const year = now.getFullYear();
  const dayOfYear = getDayOfYear(now);
  const totalDays = getDaysInYear(year);
  const percentage = Math.round((dayOfYear / totalDays) * 100);

  return { dayOfYear, totalDays, percentage };
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}

export function getDayOfWeek(date: Date): number {
  return date.getDay();
}

export function getDateFromDayOfYear(dayOfYear: number, year: number): Date {
  const date = new Date(year, 0, dayOfYear);
  return date;
}

export function getMonthIndex(dayOfYear: number, year: number): number {
  return getDateFromDayOfYear(dayOfYear, year).getMonth();
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export function getMonthName(monthIndex: number): string {
  return MONTH_NAMES[monthIndex];
}

export function getDaysInMonth(month: number, year: number): number {
  return new Date(year, month + 1, 0).getDate();
}

export function getCalendarDays(year: number): CalendarDay[][] {
  const weeks: CalendarDay[][] = [];
  const jan1 = new Date(year, 0, 1);

  for (let i = 0; i < 54; i++) {
    const week: CalendarDay[] = [];
    let hadAnyDay = false;

    for (let d = 0; d < 7; d++) {
      const dayOfYear = i * 7 + d - jan1.getDay() + 1;
      if (dayOfYear < 1 || dayOfYear > getDaysInYear(year)) {
        week.push({ day: null, dayOfYear: null });
      } else {
        hadAnyDay = true;
        const date = new Date(year, 0, dayOfYear);
        week.push({ day: date.getDate(), dayOfYear });
      }
    }

    if (!hadAnyDay && i > 0) break;
    weeks.push(week);
  }

  return weeks;
}
