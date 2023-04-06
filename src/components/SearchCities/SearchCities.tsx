import axios from "axios";
import { APIResponseInterface } from "interface/Interface";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

interface SearchCitiesProps {
  setWeatherData: React.Dispatch<React.SetStateAction<APIResponseInterface | undefined>>;
}

const SearchCities = ({ setWeatherData }: SearchCitiesProps) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const searchCity = () => {
    inputValue !== "" &&
      axios
        .get(`https://api.weatherapi.com/v1/forecast.json?key=a35c4486065e4b6d966171930230304&q=${inputValue}&days=7`)
        .then((response) => setWeatherData(response.data))
        .catch(() => setWeatherData(undefined));

    setInputValue("");
  };

  const onEnterKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.key === "Enter" && searchCity();
  };

  return (
    <div className="flex justify-between items-center shadow-sm rounded-3xl p-1 w-full bg-slate-50 dark:bg-gradient-to-r dark:from-[#1f2a3a] dark:to-[#1d2736]">
      <input
        onKeyDown={onEnterKeyPress}
        onChange={onInputChange}
        className="outline-none ps-3 bg-transparent h-8 w-full"
        type="text"
        placeholder="Search for cities"
        value={inputValue}
      />
      <button
        onClick={searchCity}
        className="bg-slate-200 p-1.5 rounded-full hover:bg-slate-300 dark:hover:bg-slate-400 transition-colors"
        type="button">
        <BiSearch color="black" size="22" />
      </button>
    </div>
  );
};

export default SearchCities;
