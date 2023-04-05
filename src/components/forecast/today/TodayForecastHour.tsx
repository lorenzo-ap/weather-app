import { TodayForecastHourProps } from "interface/Interface";
import moment from "moment";

const CarouselHour = (props: TodayForecastHourProps) => {
  const { time, temp_c, condition, localTime } = props;

  return (
    <div>
      <div>{moment(new Date(time)).format(moment(new Date(time)).isSame(moment(new Date(localTime)), "hour") ? "[Now]" : "HH")}</div>
      <div className="w-10">
        <img className="w-full" src={condition.icon} alt={condition.text} />
      </div>
      <div>{Math.round(temp_c)}°</div>
    </div>
  );
};

export default CarouselHour;
