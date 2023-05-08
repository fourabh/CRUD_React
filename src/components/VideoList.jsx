import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideos from "../Hooks/VideosHook";
import axios from "axios";
import { useEffect, useState } from "react";
import useVideoDispatch from "../Hooks/VideoDispatch";

const VideoList = ({ editVideo }) => {
  const videos = useVideos();

  // const [videos,setVideos] = useState([])

  const dispatch = useVideoDispatch();
  const url = "https://my.api.mockaroo.com/first.json?key=27d82450";

  const handleClick = async () => {
    const res = await axios.get(url);
    console.log(res.data);
    dispatch({type:"LOAD_DATA",payload:res.data})
  };

  useEffect(()=>{
    handleClick()
  },[])

  return (
    <div>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          id={video.id}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          editVideo={editVideo}
        >
          <PlayButton
            onPlay={() => console.log("Play", video.title)}
            onPause={() => console.log("Pause", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      <button onClick={handleClick}>Get Video</button>
    </div>
  );
};

export default VideoList;
