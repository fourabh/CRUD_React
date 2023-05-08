import { useEffect } from "react";
import useVideoDispatch from "../Hooks/VideoDispatch";
import "./Video.css"


const Video = ({ title, id, channel, views, time ,verified,children,editVideo}) => {

    const dispatch = useVideoDispatch()



    return <>

        <div className='container'>
            <button className="close" onClick={()=>dispatch({type:"DELETE",payload:id})} >X</button>
            <button className="edit" onClick={()=>editVideo(id)} >Edit</button>
            <div className="pic">
                <img src={`https://picsum.photos/id/${id}/200/200`} alt="image" />
            </div>
            <div className="title">{title}</div>
            <div className="channel">{channel} {verified?"✅":null}</div>
           
            <div className="views">
                {views} views <span>.</span> {time}
            </div>
            <div className="button">
                {children}
            </div>
        </div>

    </>
}
export default Video;