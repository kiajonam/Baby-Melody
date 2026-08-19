/* Display all music row*/
import "./MusicList.css"

import MusicCard from "./MusicCard/MusicCard";

export default function MusicList({songs, onPlay,currentSong, isPlaying,currentTime, duration, onSeek }){
    return(
        <div className="musicCards">
            {songs.map(song => (
                <MusicCard song={song} key={song.id} onPlay={onPlay} currentSong={currentSong} isPlaying={isPlaying}
                currentTime={currentTime}
                duration={duration}
                onSeek={onSeek}
        
                />
            ))}
        </div>
    )
}