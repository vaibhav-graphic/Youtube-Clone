export const MENU_IMG =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png";

export const YOUTUBE_LOGO =
  "https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo-2017.png";

export const USER_ICON =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s";


const YOUTUBE_API = import.meta.env.VITE_YOUTUBE_API_KEY;

export const YOUTUBE_VIDEO_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + YOUTUBE_API;

export const YOUTUBE_SEARCH_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";