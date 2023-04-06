import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import moment from "moment";
import { TodayForecastProps } from "interface/Interface";
import TodayForecastHour from "./HourForecast";

const TodayForecast = (props: TodayForecastProps) => {
  const ref = useRef<any>();
  const { events } = useDraggable(ref);

  const { days, localTime } = props;

  const currentHour = moment(new Date(localTime)).format("HH");
  const forecastHours = days?.[0].hour.slice(parseInt(currentHour)).concat(days?.[1].hour.slice(0, parseInt(currentHour)));

  return (
    <div className="px-4 py-3 sm:px-5 sm:py-4 rounded-xl text-center shadow-md bg-slate-50 dark:bg-gradient-to-r dark:from-[#1f2a3a] dark:to-[#1d2736]">
      <h2 className="text-left mb-2 text-lg">Today's forecast</h2>
      <div className="flex overflow-x-scroll w-full cursor-grab gap-5 pt-2 pb-3" {...events} ref={ref}>
        {forecastHours?.map((hour) => (
          <TodayForecastHour key={hour.time} {...{ ...hour, localTime }} />
        ))}
      </div>
    </div>
  );
};

export default TodayForecast;
