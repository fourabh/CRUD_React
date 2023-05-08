import React, {  useEffect, useState } from "react";
import "./Addvideo.css";
import useVideoDispatch from "../Hooks/VideoDispatch";

const initialState = {
  time: "2 Months ago",
  channel: "Himanshu Dost",
  verified: true,
  title: "",
  views: "",
};

const Addvideo = ({  editableVideo }) => {
  const [video, setVideo] = useState(initialState);
  const dispatch = useVideoDispatch()

  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
  }, [editableVideo]);

  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      dispatch({type:"UPDATE",payload:video});
    } else {
      dispatch({type:"ADD",payload:video});
    }
    setVideo(initialState);
    // console.log(video)
  }
  function handleChange(e) {
    // console.log(e.target.name, e.target.value)
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="title"
          value={video.title}
        />
        <input
          type="text"
          name="views"
          onChange={handleChange}
          placeholder="views"
          value={video.views}
        />

        <button
          onClick={handleSubmit}
          // onClick={() => {
          // setVideos([...videos, ])
          // }}
        >
          {editableVideo ? "Edit" : "Add"} Video
        </button>
      </form>
    </div>
  );
};

export default Addvideo;
