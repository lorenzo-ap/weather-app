import { DayProps } from "interface/Interface";
import moment from "moment";
import { BsDropletFill, BsDropletHalf, BsDroplet, BsThermometerHalf, BsThermometerHigh, BsThermometerLow } from "react-icons/bs";

interface DayForecastProps {
  day: DayProps;
  localTime: string;
}

const DayForecast = (props: DayForecastProps) => {
  const { day, localTime } = props;

  const checkHumidity = (humidity: number) => {
    if (humidity >= 70) {
      return <BsDropletFill size="18" />;
    } else if (humidity >= 30) {
      return <BsDropletHalf size="18" />;
    } else {
      return <BsDroplet size="18" />;
    }
  };

  const checkTemperature = (temperature: number) => {
    if (temperature >= 25) {
      return <BsThermometerHigh size="18" />;
    } else if (temperature >= 15) {
      return <BsThermometerHalf size="18" />;
    } else {
      return <BsThermometerLow size="18" />;
    }
  };

  return (
    <div className="flex justify-between items-center gap-6">
      <div className="w-20">
        {moment(new Date(day.date)).format(moment(new Date(day.date)).isSame(moment(new Date(localTime)), "day") ? "[Today]" : "dddd")}
      </div>
      <img className="w-10" src={day.day.condition.icon} alt={day.day.condition.text} />
      <div className="flex justify-between w-32">
        <div className="flex items-center gap-1 text-lg">
          {checkHumidity(day.day.avghumidity)} {day.day.avghumidity}%
        </div>
        <div className="flex items-center text-lg">
          {Math.round(day.day.avgtemp_c)}° {checkTemperature(day.day.avgtemp_c)}
        </div>
      </div>
    </div>
  );
};

export default DayForecast;
