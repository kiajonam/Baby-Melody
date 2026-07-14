/* Display all music row*/

import MusicCard from "./MusicCard/MusicCard";

export default function MusicList({songs, onPlay,isPlaying,currentSong}){
    return(
        <div className="musicCards">
            {songs.map(song => (
                <MusicCard song={song} key={song.id} onPlay={onPlay} currentSong={currentSong} isPlaying={isPlaying}/>
            ))}
        </div>
    )
}