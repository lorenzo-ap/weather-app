import { Dispatch, SetStateAction } from "react";

export interface DayProps {
  date: string;
  hour: TodayForecastHourProps[];
  day: {
    avgtemp_c: number;
    avghumidity: number;
    condition: ConditionInterface;
  };
}

export interface TodayForecastHourProps {
  time: string;
  temp_c: number;
  condition: ConditionInterface;
  localTime: string;
}

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
  };
}

export interface TodayForecastProps {
  days?: DayProps[];
  localTime: string;
}

export interface CitiesProps {
  weatherData?: APIResponseInterface;
  setRenderPage: Dispatch<React.SetStateAction<boolean>>;
  setWeatherData: Dispatch<SetStateAction<APIResponseInterface | undefined>>;
}

interface ConditionInterface {
  text: string;
  icon: string;
}
