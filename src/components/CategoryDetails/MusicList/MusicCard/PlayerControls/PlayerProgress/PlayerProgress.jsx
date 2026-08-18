import "./PlayerProgress.css"
import ProgressBar from "../ProgressBar/ProgressBar"; 

export default function PlayerProgress({handleSeek, duration, currentTime,currentSong}) {
  
  return (
    <>
       <div className="player-progress">
        
      <ProgressBar
        onSeek={handleSeek}
        duration={duration}
        currentTime={currentTime}
        currentSong={currentSong}
      />
    </div>
    </>
  );
}
