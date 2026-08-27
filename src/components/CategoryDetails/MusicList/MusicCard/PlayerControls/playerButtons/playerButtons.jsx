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
import { useLanguage } from "../../../../../../i18n/LanguageContext";

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
  const { t } = useLanguage();

  return (
    <div className="player-buttons">
      <button
        onClick={toggleShuffle}
        aria-label={t("controls.shuffle")}
        className={`btns ${isShuffle ? "active" : ""}`}
      >
        <Shuffle size={18} />
      </button>
      <button
        className="prev btns"
        onClick={handlePrev}
        disabled={!hasSong}
        aria-label={t("controls.previous")}
      >
        <SkipBack size={18} fill="currentColor" />
      </button>
      <button
        className="toggle-btn btns"
        onClick={togglePlayPause}
        disabled={!hasSong}
        aria-label={t(isPlaying ? "controls.pause" : "controls.play")}
      >
        {isPlaying ? (
          <Pause size={18} fill="currentColor" />
        ) : (
          <Play size={18} fill="currentColor" />
        )}
      </button>
      <button
        className="next btns"
        onClick={handleNext}
        disabled={!hasSong}
        aria-label={t("controls.next")}
      >
        <SkipForward size={18} fill="currentColor" />
      </button>
      <button
        className={`repeat btns ${repeatMode !== "off" ? "active" : ""}`}
        onClick={toggleRepeat}
        aria-label={t("controls.repeat")}
      >
        {repeatMode === "one" ? (
          <Repeat1 size={18} fill="currentColor" />
        ) : (
          <Repeat size={18} fill="currentColor" />
        )}
      </button>
    </div>
  );
}
