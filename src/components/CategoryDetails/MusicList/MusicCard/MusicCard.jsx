/**
 * Displays a single music track.
 * Receives track information through props.
 */

import "./MusicCard.css";
import PlayButton from "./PlayerControls/PlayButton/PlayButton";
import ProgressBar from "./PlayerControls/ProgressBar/ProgressBar";
import SongInfo from "./PlayerControls/SongInfo/SongInfo";

export default function MusicCard({ song, onPlay,currentSong, isPlaying, currentTime, duration, onSeek}) {
    
    return (
    <div className="music-row">
    <PlayButton song={song} onPlay={onPlay} currentSong={currentSong} isPlaying={isPlaying} />
    <SongInfo song={song} />
    
    <ProgressBar currentTime={currentTime}
    duration={duration}
    currentSong={currentSong}
     song={song} 
     onSeek={onSeek}           
                />
    </div>
        
    );
}



