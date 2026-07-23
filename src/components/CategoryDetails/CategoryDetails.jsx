/**
 * Displays the selected category and its music tracks.
 * Receives the category object and filtered songs as props.
 */
import useAudioPlayer from "../../hooks/useAudioPlayer";
import "./CategoryDetails.css";
import CategoryHeader from "./CategoryHedaer/CategoryHeader";
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
      </div>
    </>
  );
}
