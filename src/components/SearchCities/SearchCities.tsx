import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { SearchCitiesProps } from "interface/Interface";

const SearchCities = (props: SearchCitiesProps) => {
  const { weatherData, onKeyDown, onInputChange, inputValue, onAddToFavouriteButtonClick, searchCity } = props;

  return (
    <div className="flex justify-between items-center mb-5 gap-5">
      <div
        className="flex justify-between items-center shadow-md rounded-3xl p-1 w-full"
        style={{ background: "linear-gradient(to right, #1f2a3a, #1d2736)" }}>
        <input
          onKeyDown={onKeyDown}
          onChange={onInputChange}
          className="outline-none ps-3 bg-transparent h-8 w-full"
          type="text"
          placeholder="Search for cities"
          value={inputValue}
        />
        <button className="bg-slate-200 p-1.5 rounded-full hover:bg-slate-400 transition-colors" onClick={searchCity} type="button">
          <BiSearch color="black" size="22" />
        </button>
      </div>
      {weatherData?.location.name && (
        <button onClick={onAddToFavouriteButtonClick} type="button">
          {localStorage.getItem(weatherData?.location.name || "") ? <AiFillHeart size="32" /> : <AiOutlineHeart size="32" />}
        </button>
      )}
    </div>
  );
};

export default SearchCities;
