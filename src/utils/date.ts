import type { YearProgress } from "../types";

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
