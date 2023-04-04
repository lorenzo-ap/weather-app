export interface DayProps {
  date: string;
  hour: HourProps[];
  day: {
    avgtemp_c: number;
    avghumidity: number;
    condition: ConditionInterface;
  };
}

export interface HourProps {
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

export interface CarouselProps {
  days?: DayProps[];
  localTime: string;
}

export interface SearchCitiesProps {
  weatherData?: APIResponseInterface;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
  inputValue: string;
  onAddToFavouriteButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  searchCity: React.MouseEventHandler<HTMLButtonElement>;
}

export interface FavouriteCitiesProps {
  setCity: any;
  clearLocalStorage: React.MouseEventHandler<HTMLButtonElement>;
  removeFavouriteCity: React.MouseEventHandler<HTMLButtonElement>;
}

interface ConditionInterface {
  text: string;
  icon: string;
}
