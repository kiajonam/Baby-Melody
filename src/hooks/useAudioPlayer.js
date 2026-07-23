import { useState, useRef, useEffect } from "react";

export default function useAudioPlayer(songs) {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  function handleSongClick(song) {
    if (currentSong?.id === song.id && isPlaying) {
      setIsPlaying(false);
      return;
    }

    playSong(song);
  }

  function handleTimeUpdate() {
    setCurrentTime(audioRef.current.currentTime);
  }

  function handleLoadedMetadata() {
    setDuration(audioRef.current.duration);
  }

  function handleSeek(percentage) {
    if (!audioRef.current) return;
    const newTime = duration * percentage;
    audioRef.current.currentTime = newTime;

    setCurrentTime(newTime);
  }

  function handleEnded() {
    if (!songs || songs.length === 0) return;
    const currentIndex = songs.findIndex((s) => s.id === currentSong?.id);
    const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % songs.length : 0;
    const nextSong = songs[nextIndex];
    playSong(nextSong);
  }

  function playSong(song) {
    setCurrentSong(song);
    setIsPlaying(true);
  }

  useEffect(() => {
    if (!audioRef.current || !currentSong) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [currentSong, isPlaying]);

  return {
    currentSong,
    setCurrentSong,
    isPlaying,
    setIsPlaying,
    currentTime,
    setCurrentTime,
    duration,
    setDuration,
    audioRef,
    handleSongClick,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleSeek,
    handleEnded,
    playSong,
  };
}
