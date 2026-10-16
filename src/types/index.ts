export interface YearProgress {
  dayOfYear: number;
  totalDays: number;
  percentage: number;
}

export interface CalendarDay {
  day: number | null;
  dayOfYear: number | null;
}

export type Theme = "light" | "dark";
