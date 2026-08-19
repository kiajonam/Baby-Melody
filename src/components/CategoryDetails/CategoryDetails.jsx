/**
 * Displays the selected category and its music tracks.
 * Receives the category object and filtered songs as props.
 */
import useAudioPlayer from "../../hooks/useAudioPlayer";
import "./CategoryDetails.css";
import CategoryHeader from "./CategoryHedaer/CategoryHeader";
import PlayerControls from "./MusicList/MusicCard/PlayerControls/PlayerControls";
import MusicList from "./MusicList/MusicList";

export default function CategoryDetails({ category, songs }) {
  const {
    currentSong,
    handleSongClick,
    currentTime,
    duration,
    audioRef,
    handleSeek,
    handleLoadedMetadata,
    handleTimeUpdate,
    isPlaying,
    handleEnded,
    handleNext,
    handlePrev,
    togglePlayPause,
    volume,
    isMuted,
    handleVolumeChange,
    toggleMute,
    isShuffle,
    toggleShuffle,
  } = useAudioPlayer(songs);

  return (
    <>
      <div className="category-details-page">
        <CategoryHeader category={category} />

        <MusicList
          songs={songs}
          onPlay={handleSongClick}
          duration={duration}
          currentSong={currentSong}
          currentTime={currentTime}
          onSeek={handleSeek}
          isPlaying={isPlaying}
          
        />

        <audio
          ref={audioRef}
          src={currentSong?.audio}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
        ></audio>

        <PlayerControls
          handlePrev={handlePrev}
          togglePlayPause={togglePlayPause}
          handleNext={handleNext}
          currentSong={currentSong}
          isPlaying={isPlaying}
          handleSeek={handleSeek}
          duration={duration}
          currentTime={currentTime}
          volume={volume}
          isMuted={isMuted}
          handleVolumeChange={handleVolumeChange}
          toggleMute={toggleMute}
          isShuffle={isShuffle}
          toggleShuffle={toggleShuffle}
        />
      </div>
    </>
  );
}
