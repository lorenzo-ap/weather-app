import { APIResponseInterface } from "interface/Interface";
import { BiWind } from "react-icons/bi";
import { BsSunrise, BsSunset } from "react-icons/bs";
import moment from "moment";

const CurrentWeather = (props: APIResponseInterface) => {
  const { location, current, forecast } = props;

  return (
    <div className="flex justify-between mt-3 mb-5 xxs:px-5 xs:px-10 sm:px-16 md:px-8">
      <div className="text-left">
        <h1 className="text-2xl">{location.name}</h1>
        <div className="text-xs mb-5">{current.condition.text}</div>
        <div className="text-8xl font-bold">{Math.round(current.temp_c || 0)}°</div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <img src={current.condition.icon} alt={current.condition.text} />
        <div>
          <div className="flex justify-end items-center gap-1">
            <BsSunrise size="20" />
            <span className="tracking-wider">{moment(forecast.forecastday[0].astro.sunrise, ["h:mm A"]).format("HH:mm")}</span>
          </div>
          <div className="flex justify-end items-center gap-1">
            <BsSunset size="20" />
            <span className="tracking-wider">{moment(forecast.forecastday[0].astro.sunset, ["h:mm A"]).format("HH:mm")}</span>
          </div>
          <div className="flex justify-end items-center gap-1">
            <BiWind size="20" />
            <div className="flex items-baseline gap-0.5">
              <span>{current.wind_kph}</span>
              <span className="text-sm">km/h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
