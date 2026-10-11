interface DayCircleProps {
  day: number | null;
  dayOfYear: number | null;
  currentDayOfYear: number;
  monthName: string;
}

export function DayCircle({ day, dayOfYear, currentDayOfYear, monthName }: DayCircleProps) {
  if (day === null || dayOfYear === null) {
    return <span className="h-2.5 w-2.5" aria-hidden="true" />;
  }

  const isPast = dayOfYear < currentDayOfYear;
  const isCurrent = dayOfYear === currentDayOfYear;

  return (
    <span
      role="img"
      aria-label={`${monthName} ${day}, day ${dayOfYear}${isCurrent ? ", today" : isPast ? ", elapsed" : ", ahead"}`}
      title={`${monthName} ${day}`}
      className={`day-node h-2.5 w-2.5 rounded-full transition-transform duration-300 hover:scale-150 ${
        isCurrent
          ? "border-2 border-primary bg-surface shadow-[0_0_0_3px_rgb(0_245_212/0.12)]"
          : isPast
          ? "border border-primary bg-primary shadow-[0_0_8px_rgb(115_255_227/0.25)]"
          : "border border-outline/40 bg-surface-container-highest"
      }`}
    />
  );
}