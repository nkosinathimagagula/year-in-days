import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  year: number;
  percentage: number;
}

export function Header({ year, percentage }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 px-6 py-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
        {year} in days
      </h1>
      <div className="flex items-center gap-4">
        <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
          {percentage}%
        </span>
        <ThemeToggle />
      </div>
    </header>
  );
}
