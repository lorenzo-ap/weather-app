import { Dispatch, SetStateAction } from "react";

export interface APIResponseInterface {
  forecast: {
    forecastday: DayProps[];
  };
  location: {
    name: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    condition: ConditionInterface;
    wind_kph: number;
    is_day: number;
  };
}

export interface DayProps {
  date: string;
  hour: HourForecastProps[];
  day: {
    avgtemp_c: number;
    avghumidity: number;
    condition: ConditionInterface;
  };
}

export interface DayForecastProps {
  days: DayProps[];
  localTime: string;
}

export interface HourForecastProps {
  time: string;
  temp_c: number;
  condition: ConditionInterface;
  localTime: string;
}

export interface CitiesProps {
  weatherData?: APIResponseInterface;
  setRenderPage: Dispatch<React.SetStateAction<boolean>>;
  setWeatherData: Dispatch<SetStateAction<APIResponseInterface | undefined>>;
}

export interface FavouriteCityProps {
  city: string;
  setCurrentCity: React.MouseEventHandler<HTMLDivElement>;
  removeFavouriteCity: React.MouseEventHandler<HTMLButtonElement>;
}

interface ConditionInterface {
  text: string;
  icon: string;
}
