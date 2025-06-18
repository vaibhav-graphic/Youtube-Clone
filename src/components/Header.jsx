import { MENU_IMG, YOUTUBE_LOGO, USER_ICON } from "../utils/constants";

const Header = () => {
  return (
    <div className="grid grid-cols-12 shadow-lg p-2 m-2">
      <div className="flex col-span-1 p-2">
        <img className="h-12 pt-5" alt="menu" src={MENU_IMG} />
        <img className="h-17 mx-4" alt="youtubelogo" src={YOUTUBE_LOGO} />
      </div>
      <div className="col-span-10 px-60 py-7">
        <input
          className="w-1/2 border rounded-l-full border-gray-400 p-2 "
          type="text"
          placeholder="Search"
        />
        <button className="rounded-r-full border border-gray-400 px-5 py-2 bg-gray-100 cursor-pointer">
          🔍
        </button>
      </div>
      <div className="col-span-1 py-7">
        <img className="h-8" alt="usericon" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Header;
