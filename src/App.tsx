import "./index.css";
import { Header } from "./components/Header";
import { DaysGrid } from "./components/DaysGrid";
import { getYearProgress, getCurrentYear } from "./utils/date";

function App() {
  const { dayOfYear, totalDays, percentage } = getYearProgress();
  const year = getCurrentYear();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
      <Header year={year} percentage={percentage} />
      <main className="p-6 max-w-4xl mx-auto">
        <DaysGrid totalDays={totalDays} currentDay={dayOfYear} />
      </main>
    </div>
  );
}

export default App;
