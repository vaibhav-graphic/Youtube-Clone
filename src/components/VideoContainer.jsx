import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);

    const getVideo = async() => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();

        console.log(json.items);
        setVideos(json.items);
    };

    useEffect(() => {
        getVideo();
    }, []);

    return <div className="flex flex-wrap">
        {videos.map(video => <VideoCard key={video.id} info={video}/>)}
    </div>
}

export default VideoContainer;