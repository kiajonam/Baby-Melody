/**
 * Displays a single music track.
 * Receives track information through props.
 */

import "./MusicCard.css";
import PlayButton from "./PlayerControls/PlayButton/PlayButton";
import ProgressBar from "./PlayerControls/ProgressBar/ProgressBar";
import SongInfo from "./PlayerControls/SongInfo/SongInfo";
export default function MusicCard({ song, onPlay }) {
    
    return (
    <div className="music-row">
    <PlayButton song={song} onPlay={onPlay}  />
    <SongInfo song={song} />
    <ProgressBar />
    </div>
        
    );
}

