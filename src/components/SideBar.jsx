import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const sideBarMenu = useSelector((store) => store.menu.isMenuOpen);

  if (!sideBarMenu) {
    return null;
  }

  return (
    <div className="p-5 shadow-lg w-48">
      <ul className="border-b-1">
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>

      <h1 className="font-bold pt-5">You</h1>
      <ul className="border-b-1">
        <li> History</li>
        <li> PlayLists</li>
        <li> Watch Later</li>
        <li> Liked videos</li>
      </ul>

      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul className="border-b-1">
        <li> MONKEY D LUFFY</li>
        <li> All subscriptions</li>
      </ul>

      <h1 className="font-bold pt-5">Explore</h1>
      <ul className="border-b-1">
        <li> Trending</li>
        <li> Shopping</li>
        <li> Music</li>
        <li> Movies</li>
        <li> Live</li>
        <li> Gaming</li>
        <li> News</li>
        <li> Sports</li>
        <li> Courses</li>
        <li> Fashion & Beauty</li>
        <li> Podcasts</li>
      </ul>
    </div>
  );
};

export default SideBar;
