import "./index.css";
import { Header } from "./components/Header";
import { DaysGrid } from "./components/DaysGrid";
import { getYearProgress, getCurrentYear } from "./utils/date";

function App() {
  const { dayOfYear, totalDays, percentage } = getYearProgress();
  const year = getCurrentYear();

  return (
    <div className="min-h-screen bg-surface text-on-surface transition-colors">
      <Header year={year} percentage={percentage} currentDay={dayOfYear} />
      <main className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
        <DaysGrid
          year={year}
          totalDays={totalDays}
          currentDay={dayOfYear}
          percentage={percentage}
        />
      </main>
    </div>
  );
}

export default App;
