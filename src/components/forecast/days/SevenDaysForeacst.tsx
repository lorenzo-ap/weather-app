import { DayProps } from "interface/Interface";
import DayForecast from "./DayForecast";

interface DaysProps {
  days?: DayProps[];
}

const SevenDaysForecast = (props: DaysProps) => {
  const { days } = props;

  return (
    <div className="px-5 py-4 rounded-xl flex flex-col bg-gradient-to-r from-[#1f2a3a] to-[#1d2736]">
      <h3 className="mb-2 text-lg">7-day forecast</h3>
      <div className="flex flex-col justify-between h-full">
        {days?.map((day) => (
          <DayForecast key={day.date} {...day} />
        ))}
      </div>
    </div>
  );
};

export default SevenDaysForecast;
