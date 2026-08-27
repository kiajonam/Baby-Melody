/* Display all music row*/
import { useEffect, useRef } from "react";
import "./MusicList.css";

import MusicCard from "./MusicCard/MusicCard";

export default function MusicList({
  songs,
  onPlay,
  currentSong,
  isPlaying,
  currentTime,
  duration,
  onSeek,
}) {
  const musicListRef = useRef(null);

  useEffect(() => {
    if (!currentSong || !musicListRef.current) return;

    const activeCard = Array.from(
      musicListRef.current.querySelectorAll("[data-song-id]"),
    ).find((card) => card.dataset.songId === String(currentSong.id));

    activeCard?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [currentSong]);

  return (
    <div className="musicCards" ref={musicListRef}>
      {songs.map((song) => (
        <MusicCard
          song={song}
          key={song.id}
          onPlay={onPlay}
          currentSong={currentSong}
          isPlaying={isPlaying}
          currentTime={currentTime}
          duration={duration}
          onSeek={onSeek}
        />
      ))}
    </div>
  );
}
