import SearchCities from 'components/SearchCities/SearchCities';
import { CitiesProps } from 'interface/Interface';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';

const Header = (props: CitiesProps) => {
  const { weatherData, setWeatherData, setRenderPage } = props;

  const addToFavourite = () => {
    const cityName = weatherData?.location.name || '';
    localStorage.getItem(cityName) ? localStorage.removeItem(cityName) : localStorage.setItem(cityName, 'true');
    setRenderPage((prev) => !prev);
  };

  const changeTheme = () => {
    document.body.classList.toggle('dark');
    setRenderPage((prev) => !prev);
  };

  return (
    <header className="flex justify-between items-center mb-5 gap-5">
      <SearchCities {...{ setWeatherData }} />
      <button onClick={changeTheme} className="p-1" type="button">
        {document.body.className.includes('dark') ? <BsFillSunFill size="25" /> : <BsMoonFill size="25" />}
      </button>
      {weatherData?.location.name && (
        <button onClick={addToFavourite} type="button">
          {localStorage.getItem(weatherData.location.name || '') ? <AiFillHeart color="#BD081C" size="32" /> : <AiOutlineHeart size="32" />}
        </button>
      )}
    </header>
  );
};

export default Header;
