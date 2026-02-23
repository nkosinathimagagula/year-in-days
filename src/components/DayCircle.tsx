interface DayCircleProps {
  day: number;
  isPast: boolean;
}

export function DayCircle({ day, isPast }: DayCircleProps) {
  return (
    <div
      className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
        isPast
          ? "bg-emerald-500 border-emerald-500 dark:bg-emerald-400 dark:border-emerald-400"
          : "border-gray-300 dark:border-gray-600"
      }`}
      title={`Day ${day}`}
    />
  );
}
