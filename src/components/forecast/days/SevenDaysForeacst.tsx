import { DayProps } from "interface/Interface";
import Day from "./DayForecast";

interface DaysProps {
  days?: DayProps[];
}

const Days = (props: DaysProps) => {
  const { days } = props;

  return (
    <div className="px-5 py-4 rounded-xl flex flex-col" style={{ background: "linear-gradient(to right, #1f2a3a, #1d2736)" }}>
      <h3 className="mb-2 text-lg">7-day forecast</h3>
      <div className="flex flex-col justify-between h-full">
        {days?.map((day) => (
          <Day key={day.date} {...day} />
        ))}
      </div>
    </div>
  );
};

export default Days;
