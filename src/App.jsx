import "./App.css";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Video from "./components/Video";
import videoDB from "./components/Data";
import PlayButton from "./components/PlayButton";
import Chapter4 from "./components/assignments/Chapter4";
import Counter from "./components/Counter";
import { useReducer, useState } from "react";
import Chapter5 from "./components/assignments/Chapter5";
import Addvideo from "./components/Addvideo";
import VideoList from "./components/VideoList";
import Chapter6 from "./components/assignments/Chapter6";
import VideosContext from "./Context/VideosContext";
import VideoDispatchContext from "./Context/VideoDispatchContext";

function App() {
  const [editableVideo, seteditableVideo] = useState(null);

  function videoReducer(videos, action) {
    switch (action.type) {

      case "LOAD_DATA":
        return action.payload

      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];

      case "DELETE":
        return videos.filter((vid) => vid.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((vid) => vid.id === action.payload.id);
        const newVid = [...videos];
        newVid.splice(index, 1, action.payload);
        seteditableVideo(null);

        return newVid;

      default:
        return videos;
    }
  }

  // const [videos, dispatch] = useReducer(videoReducer, videoDB);

  const [videos, dispatch] = useReducer(videoReducer, []);

  // const [videos, setVideos] = useState(videoDB);

  function editVideo(id) {
    seteditableVideo(videos.find((vid) => vid.id === id));
  }

  return (
    <>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <div className="conatiner" onClick={() => console.log("App")}>
            <Addvideo editableVideo={editableVideo}></Addvideo>
            <VideoList editVideo={editVideo}></VideoList>
          </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </>
  );
}

export default App;

{
  /* <Chapter6/> */
}

{
  /* <Counter></Counter> */
}
{
  /* <div> */
}
{
  /* <PlayButton message="Play-msg" onPlay={()=>console.log("Play")} onPause={()=>console.log("Pause")}>Play</PlayButton> */
}

{
  /* <PlayButton message="Pause-msg" onCheck={()=>alert("Playyy")} >Pause</PlayButton> */
}
{
  /* <Resume {...resume} /> */
}

{
  /* </div> */
}

{
  /* <Chapter4/> */
}
{
  /* <Chapter5/> */
}
