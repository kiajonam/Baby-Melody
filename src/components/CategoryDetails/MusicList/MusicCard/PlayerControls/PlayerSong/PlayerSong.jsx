import "./PlayerSong.css";

export default function PlayerSong({ currentSong }) {
  if (!currentSong) return null;
  return (
    <div className="player-song">
      <img src={currentSong.image} alt={currentSong.title} />
      <div className="player-song-info">
        <h3>{currentSong.title}</h3>
        <p>{currentSong.artist}</p>
      </div>
    </div>
  );
}
