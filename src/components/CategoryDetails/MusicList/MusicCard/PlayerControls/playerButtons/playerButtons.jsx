import { SkipBack, Play, Pause, SkipForward,Shuffle } from "lucide-react";
import "./playerButtons.css";

export default function PlayerButtons({
  currentSong,
  handleNext,
  handlePrev,
  isPlaying,
  togglePlayPause,
}) {
  const hasSong = currentSong !== null;

  return (
    <div className="player-buttons">
      <button className="shuffle btns">
        <Shuffle />
      </button>
      <button className="prev btns"  onClick={handlePrev} disabled={!hasSong}>
        <SkipBack size={18} fill="currentColor"/>
      </button>
      <button
        className="toggle-btn btns"
        onClick={togglePlayPause}
        disabled={!hasSong} 
      >
        {isPlaying ? (<Pause size={18} fill="currentColor"/>) : (<Play size={18} fill="currentColor" />)}
      </button>
      <button className="next btns" onClick={handleNext} disabled={!hasSong}>
        <SkipForward size={18} fill="currentColor"/>
      </button>
    </div>
  );
}
