import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  year: number;
  percentage: number;
  currentDay: number;
}

export function Header({ year, percentage, currentDay }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-xl transition-colors">
      <div className="mx-auto max-w-360 px-5 pt-4 sm:px-8 sm:pt-5 lg:px-12">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
              Year in days
            </p>
            <h1 className="text-2xl font-semibold tracking-tight text-on-surface">
              {year}
            </h1>
          </div>
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="flex items-center gap-3 rounded-full bg-primary/10 px-3 py-2 text-xs font-medium text-primary sm:gap-4">
              <span>Day {currentDay}</span>
              <span className="h-1 w-1 rounded-full bg-primary" aria-hidden="true" />
              <span>{percentage}% complete</span>
            </div>
            <ThemeToggle />
          </div>
        </div>
        <div
          className="mt-4 h-1 overflow-hidden rounded-full bg-surface-container-highest"
          role="progressbar"
          aria-label="Year progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percentage}
        >
          <div
            className="h-full rounded-full bg-linear-to-r from-primary to-primary-container transition-[width] duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </header>
  );
}