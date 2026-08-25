import PlayerButtons from "./playerButtons/playerButtons";
import PlayerProgress from "./PlayerProgress/PlayerProgress";
import PlayerSong from "./PlayerSong/PlayerSong";
import "./PlayerControls.css";
import "./PlayerRight/PlayerRight";
import PalyerRight from "./PlayerRight/PlayerRight";

export default function PlayerControls({
  currentSong,
  handleNext,
  handlePrev,
  isPlaying,
  togglePlayPause,
  handleSeek,
  duration,
  currentTime,
  volume,
  isMuted,
  handleVolumeChange,
  toggleMute,
  isShuffle,
  toggleShuffle,
  repeatMode,
  toggleRepeat,
}) {
  return (
    <>
      <div className="player-controls">
        <div className="player-left">
          <PlayerSong currentSong={currentSong} />
        </div>

        <div className="player-center">
          <PlayerButtons
            handlePrev={handlePrev}
            togglePlayPause={togglePlayPause}
            handleNext={handleNext}
            currentSong={currentSong}
            isPlaying={isPlaying}
            isShuffle={isShuffle}
            toggleShuffle={toggleShuffle}
            repeatMode={repeatMode}
            toggleRepeat={toggleRepeat}
          />

          <PlayerProgress
            handleSeek={handleSeek}
            duration={duration}
            currentTime={currentTime}
          />
        </div>
        <PalyerRight
          volume={volume}
          isMuted={isMuted}
          handleVolumeChange={handleVolumeChange}
          toggleMute={toggleMute}
        />
      </div>
    </>
  );
}
