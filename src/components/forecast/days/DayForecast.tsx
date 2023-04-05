import { DayProps } from "interface/Interface";
import moment from "moment";
import { BsDropletFill, BsDropletHalf, BsDroplet, BsThermometerHalf } from "react-icons/bs";

const DayForecast = (props: DayProps) => {
  const { date, day } = props;

  const checkHumidity = (humidity: number) => {
    if (humidity >= 70) {
      return <BsDropletFill size="18" />;
    } else if (humidity >= 30) {
      return <BsDropletHalf size="18" />;
    } else {
      return <BsDroplet size="18" />;
    }
  };

  return (
    <div className="flex justify-between items-center gap-6">
      <div className="w-20">{moment(new Date(date)).format(moment(new Date(date)).isSame(moment(new Date()), "day") ? "[Today]" : "dddd")}</div>
      <img className="w-10" src={day.condition.icon} alt={day.condition.text} />
      <div className="flex justify-between w-32">
        <div className="flex items-center gap-1 text-lg">
          {checkHumidity(day.avghumidity)} {day.avghumidity}%
        </div>
        <div className="flex items-center text-lg">
          {Math.round(day.avgtemp_c)}° <BsThermometerHalf />
        </div>
      </div>
    </div>
  );
};

export default DayForecast;
