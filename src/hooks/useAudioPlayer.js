import { useState, useRef, useEffect } from "react";

export default function useAudioPlayer(songs) {
  const [currentSong, setCurrentSong] = useState(null);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  const [shuffleHistory, setShuffleHistory] = useState([]);
  const [shuffleIndex, setShuffleIndex] = useState(-1);
  const [repeatMode, setRepeatMode] = useState("off");

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

  function getNextSong() {
    if (!songs || songs.length === 0) return null;

    if (isShuffle) {
      const availableSong = songs.filter((song) => song.id !== currentSong?.id);

      if (availableSong.length === 0) {
        return currentSong;
      }
      const randomIndex = Math.floor(Math.random() * availableSong.length);

      return availableSong[randomIndex];
    }

    const currentIndex = songs.findIndex((s) => s.id === currentSong?.id);

    const nextIndex = currentIndex >= 0 ? currentIndex + 1 : 0;

    if (nextIndex >= songs.length) {
      return repeatMode === "all" ? songs[0] : null;
    }

    return songs[nextIndex];
  }
  

  function handleNext() {
    const nextSong = getNextSong();

    if (!nextSong) {
      setIsPlaying(false);
      return;
    }

      if (isShuffle) {
        addToShuffleHistory(nextSong);
        setShuffleIndex((prev) => prev + 1);
      }

      playSong(nextSong);
    }
  

  function handlePrev() {
    const prevSong = getPreviousSong();
    if (prevSong) {
      if (isShuffle) {
        setShuffleIndex((prev) => prev - 1);
      }
      playSong(prevSong);
    }
  }

  function getPreviousSong() {
    if (!songs || songs.length === 0) return null;

    if (isShuffle) {
      if (shuffleHistory.length < 2) {
        return null;
      }
      return shuffleHistory[shuffleIndex - 1];
    }

    const currentIndex = songs.findIndex((s) => s.id === currentSong?.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : songs.length - 1;
    return songs[currentIndex >= 0 ? prevIndex : 0];
  }

  function handleEnded() {
    if (repeatMode === "one") {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      return;
    }

    handleNext();
  }

  function playSong(song) {
    setCurrentSong(song);
    setIsPlaying(true);

    // if(isShuffle){
    //   setShuffleHistory((prev)=>[...prev, song])
  }

  function togglePlayPause() {
    setIsPlaying((prev) => !prev);
  }

  function toggleShuffle() {
    if (!currentSong) return;

    const nextShuffle = !isShuffle;
    setIsShuffle(nextShuffle);

    if (nextShuffle) {
      setShuffleHistory([currentSong]);
      setShuffleIndex(0);
    } else {
      setShuffleHistory([]);
      setShuffleIndex(-1);
    }
  }

  function addToShuffleHistory(song) {
    setShuffleHistory((prev) => [...prev, song]);
  }

  function toggleRepeat() {
    if (!currentSong) return;

    setRepeatMode((prev) => {
      if (prev === "off") {
        return "all";
      }

      if (prev === "all") {
        return "one";
      }
      return "off";
    });
  }


  useEffect(() => {
    if (!audioRef.current || !currentSong) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [currentSong, isPlaying]);

  function handleVolumeChange(value) {
    if (!audioRef.current) return;

    audioRef.current.volume = value;
    setVolume(value);

    if (value === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  }

  function toggleMute() {
    if (!audioRef.current) return;

    if (isMuted) {
      audioRef.current.volume = volume || 1;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  }

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
    getNextSong,
    getPreviousSong,
    handleNext,
    handlePrev,
    togglePlayPause,

    volume,
    isMuted,
    handleVolumeChange,
    toggleMute,

    isShuffle,
    toggleShuffle,
    shuffleHistory,

    repeatMode,
    toggleRepeat,
  };
}
