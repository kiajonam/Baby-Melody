import MusicCard from "./MusicCard/MusicCard";

export default function MusicList({songs, onPlay}){
    return(
        <div className="musicCards">
            {songs.map(song => (
                <MusicCard song={song} key={song.id} onPlay={onPlay}/>
            ))}
        </div>
    )
}