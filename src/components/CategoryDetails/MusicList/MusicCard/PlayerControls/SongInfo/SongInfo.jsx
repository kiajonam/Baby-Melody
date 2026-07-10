import "./SongInfo.css";

export default function SongInfos({song}){
    return(
        
            <div className="music-info">
                <a href="#">{song.title}</a>
                <a href="#">{song.artist}</a>
            </div>
        
    )
}
