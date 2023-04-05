import { APIResponseInterface } from "interface/Interface";
import { BiWind } from "react-icons/bi";

const CurrentWeather = (props: APIResponseInterface) => {
  const { location, current } = props;

  return (
    <div className="mt-3 mb-8 xxs:px-5 xs:px-10 sm:px-16 md:px-8 flex justify-between">
      <div className="text-left">
        <h1 className="mb-5 text-2xl">{location.name}</h1>
        <div className="text-8xl font-bold">{Math.round(current.temp_c || 0)}°</div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="text-right text-sm">
          <span>{current.condition.text}</span>
          <img className="ms-auto mt-1" src={current.condition.icon} alt={current.condition.text} />
        </div>
        <div>
          <div className="flex justify-end items-center gap-1">
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

export default CurrentWeather;
