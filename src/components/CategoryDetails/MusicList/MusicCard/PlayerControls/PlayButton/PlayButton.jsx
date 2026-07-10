import {Play, Pause} from "lucide-react";
import "./PlayButton.css";
export default function PlayButton({song, onPlay}){
    const isPlaying = false;
    return(
            <div className="music-details">
            <img src={song.image} alt={song.title} />
        
            <div className="play-overlay" onClick={()=> onPlay(song)}>
                {isPlaying ? <Pause size={18}/> : <Play size={18}/>}
            </div>
             
            </div>
    )
}