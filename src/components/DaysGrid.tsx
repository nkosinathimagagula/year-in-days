import { DayCircle } from "./DayCircle";

interface DaysGridProps {
  totalDays: number;
  currentDay: number;
}

export function DaysGrid({ totalDays, currentDay }: DaysGridProps) {
  const days = Array.from({ length: totalDays }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-12 sm:grid-cols-16 lg:grid-cols-18 gap-3">
      {days.map((day) => (
        <DayCircle key={day} day={day} isPast={day < currentDay} />
      ))}
    </div>
  );
}
