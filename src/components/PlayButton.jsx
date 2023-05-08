import {useState} from 'react'
import "./PlayButton.css"

const PlayButton = ({children,message,onCheck,onPlay,onPause}) => {

    const [playing,setPlaying] = useState(false);
    function handleClick(e){
      console.log(e)
      e.stopPropagation();
      if(playing) onPause();
      else onPlay();

      setPlaying(playing=>!playing)
    };

  return (
    <div>
      <button onClick={handleClick} >{children} : {playing?">":"||"}</button>
    </div>
  )
};

export default PlayButton
