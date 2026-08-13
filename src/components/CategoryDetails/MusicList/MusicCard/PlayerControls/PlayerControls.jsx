import PlayerButtons from "./playerButtons/playerButtons";
import PlayerProgress from "./PlayerProgress/PlayerProgress";
import PlayerSong from "./PlayerSong/PlayerSong";
import "./PlayerControls.css";


export default function PlayerControls({currentSong, handleNext,handlePrev, isPlaying, togglePlayPause}) {
  
  return (
    <div className="player-controls">
     <PlayerSong currentSong={currentSong}/>
     <PlayerButtons handlePrev={handlePrev}
    togglePlayPause={togglePlayPause}
    handleNext={handleNext}
    currentSong={currentSong}
    isPlaying={isPlaying}/>
     <PlayerProgress />
    </div>
  );
}
