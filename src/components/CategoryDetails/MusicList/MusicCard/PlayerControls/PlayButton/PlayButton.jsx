import {Play, Pause} from "lucide-react";
import "./PlayButton.css";
export default function PlayButton({song, onPlay, currentSong, isPlaying}){
    const isCurrentSong = currentSong?.id === song.id;
    const Playing = isCurrentSong && isPlaying;

    return(
            <div className="music-details">
            <img src={song.image} alt={song.title} />
        
            <div className={`play-overlay ${isCurrentSong ? "is-active" : ""}`} onClick={()=> onPlay(song)}>
                {Playing ? (<Pause size={18}/>):(<Play size={18}/>)}
            </div>
             
            </div>
    )
}