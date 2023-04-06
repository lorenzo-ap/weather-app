import { DayProps } from "interface/Interface";
import DayForecast from "./DayForecast";

interface WeekForecast {
  days: DayProps[];
  localTime: string;
}

const WeekForecast = (props: WeekForecast) => {
  const { days, localTime } = props;

  return (
    <div className="px-4 py-3 sm:px-5 sm:py-4 rounded-xl flex flex-col shadow-md bg-slate-50 dark:bg-gradient-to-r dark:from-[#1f2a3a] dark:to-[#1d2736]">
      <h2 className="mb-2 text-lg">7-day forecast</h2>
      <div className="pb-2 overflow-x-scroll h-full xxs:overflow-x-auto xxs:pb-0">
        <div className="flex flex-col justify-between h-full w-80 xxs:w-auto">
          {days?.map((day) => (
            <DayForecast key={day.date} {...{ day, localTime }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeekForecast;
