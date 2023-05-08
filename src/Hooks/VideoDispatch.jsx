import { useContext } from "react";
import VideoDispatchContext from "../Context/VideoDispatchContext";


function useVideoDispatch(){
    // const dispatch = useContext(VideoDispatchContext)
    return useContext(VideoDispatchContext);
}

export default useVideoDispatch;