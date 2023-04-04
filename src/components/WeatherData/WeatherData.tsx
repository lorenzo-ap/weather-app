import { APIResponseInterface } from "interface/Interface";
import { BiWind } from "react-icons/bi";

const WeatherData = (props: APIResponseInterface) => {
  const { location, current } = props;

  return (
    <div className="mt-3 mb-8 px-2 sm:px-32 md:px-8 flex justify-between">
      <div className="text-left">
        <h2 className="mb-5 text-xl ps-2">{location.name}</h2>
        <div className="text-8xl font-bold">{Math.round(current.temp_c || 0)}°</div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="text-right text-sm">
          {current.condition.text}
          <img className="ms-auto mt-1" src={current.condition.icon} alt={current.condition.text} />
        </div>
        <div>
          <div className="flex justify-center items-center gap-1">
            <BiWind size="20" />
            <div className="flex items-baseline gap-0.5">
              <span className="font-bold text-xl">{current.wind_kph}</span>
              <span className="text-sm">km/h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
