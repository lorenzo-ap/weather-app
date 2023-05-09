import axios from 'axios';
import { APIResponseInterface } from 'interface/Interface';
import { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';

interface SearchCitiesProps {
  setWeatherData: React.Dispatch<React.SetStateAction<APIResponseInterface | undefined>>;
}

interface Suggestion {
  name: string;
}

interface City {
  name: string;
}

const SearchCities = ({ setWeatherData }: SearchCitiesProps) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestedCities, setSuggestedCities] = useState<Suggestion[]>([]);
  const [APIdata, setAPIData] = useState([]);

  useEffect(() => {
    const uniqueCities = new Set();

    const filteredCities = APIdata.filter((city: City) => {
      if (!uniqueCities.has(city.name) && /^[a-zA-Z() -]+$/.test(city.name)) {
        uniqueCities.add(city.name);
        return true;
      }
      return false;
    }).map((city: City) => ({ name: city.name }));

    setSuggestedCities(filteredCities);
  }, [APIdata]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    value !== '' && value.trim().length > 0
      ? axios
          .get(`https://api.weatherapi.com/v1/search.json?key=231b8f0b79954d95bc494854230905&q=${value}`)
          .then((response) => {
            setAPIData(response.data);
          })
          .catch(() => setAPIData([]))
      : setAPIData([]);
  };

  const searchCity = () => {
    inputValue !== '' &&
      inputValue.trim().length > 0 &&
      axios
        .get(`https://api.weatherapi.com/v1/forecast.json?key=231b8f0b79954d95bc494854230905&q=${inputValue}&days=7`)
        .then((response) => setWeatherData(response.data))
        .catch(() => setWeatherData(undefined));

    setInputValue('');
    setSuggestedCities([]);
  };

  const onEnterKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.key === 'Enter' && searchCity();
  };

  const setCurrentSuggestedCity: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const city = (event.target as HTMLDivElement).textContent;

    axios
      .get(`https://api.weatherapi.com/v1/forecast.json?key=231b8f0b79954d95bc494854230905&q=${city}&days=7`)
      .then((response) => setWeatherData(response.data))
      .catch(() => setWeatherData(undefined));

    setInputValue('');
    setSuggestedCities([]);
  };

  return (
    <div className="relative flex justify-between items-center shadow-sm rounded-3xl p-1 w-full bg-slate-50 dark:bg-gradient-to-r dark:from-[#1f2a3a] dark:to-[#1d2736]">
      <input
        onKeyDown={onEnterKeyPress}
        onChange={handleInputChange}
        className="outline-none ps-3 bg-transparent h-8 w-full z-10"
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
      {suggestedCities.length > 0 && (
        <div className="absolute top-[50px] left-0 w-full backdrop-blur-md rounded-3xl shadow-xl">
          <div className="w-full bg-[rgb(248,250,252,.65)] dark:bg-[rgb(31,42,58,.75)] rounded-3xl py-2 px-4">
            {suggestedCities.map((suggestion: City) => (
              <div onClick={setCurrentSuggestedCity} key={suggestion.name} className="cursor-pointer py-0.5 hover:opacity-60 transition-opacity">
                {suggestion.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchCities;
