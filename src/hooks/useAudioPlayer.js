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
  const audioContextRef = useRef(null);
  const sourceNodeRef = useRef(null);
  const gainNodeRef = useRef(null);
  const lastNonZeroVolumeRef = useRef(1);

  function ensureAudioGraph() {
    if (!audioRef.current) return false;

    if (gainNodeRef.current) return true;

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return false;

    try {
      const audioContext = new AudioContextClass();
      const sourceNode = audioContext.createMediaElementSource(
        audioRef.current,
      );
      const gainNode = audioContext.createGain();

      audioRef.current.volume = 1;
      sourceNode.connect(gainNode);
      gainNode.connect(audioContext.destination);

      audioContextRef.current = audioContext;
      sourceNodeRef.current = sourceNode;
      gainNodeRef.current = gainNode;
      gainNode.gain.value = isMuted ? 0 : volume;

      return true;
    } catch (error) {
      console.error("Unable to initialize the audio volume control.", error);
      return false;
    }
  }

  function resumeAudioContext() {
    if (audioContextRef.current?.state === "suspended") {
      audioContextRef.current.resume().catch(() => {});
    }
  }

  useEffect(() => {
    return () => {
      sourceNodeRef.current?.disconnect();
      gainNodeRef.current?.disconnect();
      audioContextRef.current?.close();
    };
  }, []);

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
    ensureAudioGraph();
    resumeAudioContext();
    setCurrentSong(song);
    setIsPlaying(true);

    // if(isShuffle){
    //   setShuffleHistory((prev)=>[...prev, song])
  }

  function togglePlayPause() {
    ensureAudioGraph();
    resumeAudioContext();
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

    const nextVolume = Math.min(Math.max(value, 0), 1);
    const hasAudioGraph = ensureAudioGraph();
    resumeAudioContext();

    if (hasAudioGraph && gainNodeRef.current) {
      gainNodeRef.current.gain.value = nextVolume;
    } else {
      audioRef.current.volume = nextVolume;
    }

    if (nextVolume > 0) {
      lastNonZeroVolumeRef.current = nextVolume;
    }

    setVolume(nextVolume);

    if (nextVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  }

  function toggleMute() {
    if (!audioRef.current) return;

    const hasAudioGraph = ensureAudioGraph();
    resumeAudioContext();

    if (isMuted) {
      const restoredVolume = volume > 0 ? volume : lastNonZeroVolumeRef.current;

      if (hasAudioGraph && gainNodeRef.current) {
        gainNodeRef.current.gain.value = restoredVolume;
      } else {
        audioRef.current.volume = restoredVolume;
      }
      setVolume(restoredVolume);
      setIsMuted(false);
    } else {
      if (hasAudioGraph && gainNodeRef.current) {
        gainNodeRef.current.gain.value = 0;
      } else {
        audioRef.current.volume = 0;
      }
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
