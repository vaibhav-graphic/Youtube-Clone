import { useDispatch } from "react-redux";
import {
  MENU_IMG,
  YOUTUBE_LOGO,
  USER_ICON,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { toggleMenu } from "../utils/menuSlice";
import { useEffect, useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState();
  const [suggestions, setSuggestions] = useState([]);

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    setSuggestions(json[1]);
  };

  useEffect(() => {
    const timer = setTimeout(getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="grid grid-cols-12 shadow-lg p-2 m-2">
      <div className="flex col-span-1 p-2">
        <img
          onClick={handleMenuToggle}
          className="h-12 pt-5 cursor-pointer"
          alt="menu"
          src={MENU_IMG}
        />
        <img className="h-17 mx-4" alt="youtubelogo" src={YOUTUBE_LOGO} />
      </div>
      <div className="col-span-10 px-60 py-7">
        <div>
          <input
            className="w-1/2 border rounded-l-full border-gray-400 p-2 "
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          <button className="rounded-r-full border border-gray-400 px-5 py-2 bg-gray-100 cursor-pointer">
            🔍
          </button>
        </div>
        <div className="fixed bg-white py-2 px-5 w-96 shadow-lg rounded-lg border border-gray-200">
          <ul>
            {suggestions.map((s) => (
              <li key={s} className="py-2 shadow-sm hover:bg-gray-100">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-1 py-7">
        <img className="h-8" alt="usericon" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Header;
