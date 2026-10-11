import { DayCircle } from "./DayCircle";
import { getDayOfYear, getDaysInMonth, getMonthName } from "../utils/date";

interface DaysGridProps {
  year: number;
  totalDays: number;
  currentDay: number;
  percentage: number;
}

const DAYS = ["S", "M", "T", "W", "T", "F", "S"];
const MONTHS = Array.from({ length: 12 }, (_, monthIndex) => monthIndex);

export function DaysGrid({ year, totalDays, currentDay, percentage }: DaysGridProps) {
  return (
    <div>
      <section className="mb-14 grid gap-4 md:grid-cols-[1.3fr_0.7fr]" aria-label="Year summary">
        <div className="relative isolate overflow-hidden rounded-lg bg-surface-container-low p-6 sm:p-8">
          <div
            className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-1/2 bg-gradient-to-l from-primary/10 to-transparent"
            aria-hidden="true"
          />
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
            The year, so far
          </p>
          <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h2 className="text-5xl font-semibold tracking-tight text-on-surface sm:text-6xl">
              Day {currentDay}
            </h2>
            <p className="text-sm text-on-surface-variant">of {totalDays}</p>
          </div>
          <p className="mt-2 text-sm text-on-surface-variant">{year} calendar days elapsed</p>
        </div>

        <div className="flex flex-col justify-between rounded-lg bg-surface-container-high p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
                Year progress
              </p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-secondary">
                {percentage}%
              </p>
            </div>
            <p className="pt-1 text-right text-xs leading-5 text-on-surface-variant">
              {totalDays - currentDay} days<br />
              remaining
            </p>
          </div>
          <div className="mt-8">
            <div
              className="h-1.5 overflow-hidden rounded-full bg-surface-container-highest"
              role="progressbar"
              aria-label="Year progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={percentage}
            >
              <div
                className="h-full rounded-full bg-secondary shadow-[0_0_8px_rgb(178_135_254/0.35)] transition-[width] duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <div className="mt-2 flex justify-between text-[10px] uppercase tracking-wider text-on-surface-variant">
              <span>Jan 1</span>
              <span>Dec 31</span>
            </div>
          </div>
        </div>
      </section>

      <section aria-label={`Calendar for ${year}`}>
        <div className="mb-7 flex flex-wrap items-end justify-between gap-5">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-on-surface">
              Your year in days
            </h2>
            <p className="mt-1 text-sm text-on-surface-variant">
              Each circle marks a day in {year}.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-on-surface-variant" aria-label="Day status legend">
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
              Elapsed
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full border-2 border-primary" aria-hidden="true" />
              Today
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full border border-outline/40 bg-surface-container-highest" aria-hidden="true" />
              Ahead
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-11 sm:grid-cols-2 xl:grid-cols-4">
          {MONTHS.map((monthIndex) => {
            const monthName = getMonthName(monthIndex);
            const daysInMonth = getDaysInMonth(monthIndex, year);
            const firstWeekday = new Date(year, monthIndex, 1).getDay();

            return (
              <section key={monthIndex} aria-labelledby={`month-${monthIndex}`}>
                <div className="mb-3 flex items-baseline justify-between gap-3">
                  <h3 id={`month-${monthIndex}`} className="text-base font-semibold text-on-surface">
                    {monthName}
                  </h3>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-on-surface-variant">
                    {daysInMonth} days
                  </span>
                </div>
                <div className="mb-1 grid grid-cols-7 gap-2" aria-hidden="true">
                  {DAYS.map((weekday, index) => (
                    <span
                      key={`${weekday}-${index}`}
                      className="flex h-6 w-6 items-center justify-center text-[9px] font-medium text-on-surface-variant"
                    >
                      {weekday}
                    </span>
                  ))}
                </div>
                <div
                  className="grid grid-cols-7 gap-2"
                  role="group"
                  aria-label={`${monthName} ${year}`}
                >
                  {Array.from({ length: firstWeekday }, (_, index) => (
                    <span key={`blank-${index}`} className="h-6 w-6" aria-hidden="true" />
                  ))}
                  {Array.from({ length: daysInMonth }, (_, index) => {
                    const day = index + 1;
                    const dayOfYear = getDayOfYear(new Date(year, monthIndex, day));

                    return (
                      <span key={day} className="flex h-6 w-6 items-center justify-center">
                        <DayCircle
                          day={day}
                          dayOfYear={dayOfYear}
                          currentDayOfYear={currentDay}
                          monthName={monthName}
                        />
                      </span>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </div>
  );
}