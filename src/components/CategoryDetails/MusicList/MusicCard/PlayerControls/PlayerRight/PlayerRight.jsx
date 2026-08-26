import VolumeControl from "./VolumeControl/VolumeControl";
import "./PlayerRight.css"

export default function PalyerRight({
  volume,
  isMuted,
  handleVolumeChange,
  toggleMute,
}) {
  return (
    <div className="player-right">
      <VolumeControl
        volume={volume}
        isMuted={isMuted}
        handleVolumeChange={handleVolumeChange}
        toggleMute={toggleMute}
      />
    </div>
  );
}
