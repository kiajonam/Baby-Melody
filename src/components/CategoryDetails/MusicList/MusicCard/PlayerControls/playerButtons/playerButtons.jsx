import {
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Shuffle,
  Repeat,
  Repeat1,
} from "lucide-react";
// import { BsRepeat } from "react-icons/bs";
import "./playerButtons.css";

export default function PlayerButtons({
  currentSong,
  handleNext,
  handlePrev,
  isPlaying,
  togglePlayPause,
  isShuffle,
  toggleShuffle,
  repeatMode,
  toggleRepeat,
}) {
  const hasSong = currentSong !== null;

  return (
    <div className="player-buttons">
      <button
        onClick={toggleShuffle}
        className={`btns ${isShuffle ? "active" : ""}`}
      >
        <Shuffle size={18} />
      </button>
      <button className="prev btns" onClick={handlePrev} disabled={!hasSong}>
        <SkipBack size={18} fill="currentColor" />
      </button>
      <button
        className="toggle-btn btns"
        onClick={togglePlayPause}
        disabled={!hasSong}
      >
        {isPlaying ? (
          <Pause size={18} fill="currentColor" />
        ) : (
          <Play size={18} fill="currentColor" />
        )}
      </button>
      <button className="next btns" onClick={handleNext} disabled={!hasSong}>
        <SkipForward size={18} fill="currentColor" />
      </button>
      <button
        className={`repeat btns ${repeatMode !== "off" ? "active" : ""}`}
        onClick={toggleRepeat}
      >
        {repeatMode === "one" ? (
          <Repeat1 size={18} fill="currentColor"/>
        ) : (
          <Repeat size={18} fill="currentColor"/>
        )}
        
      </button>
    </div>
  );
}
