import "./VolumeControl.css";
import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "../../../../../../../i18n/LanguageContext";

export default function VolumeControl({
  volume,
  isMuted,
  handleVolumeChange,
  toggleMute,
}) {
  const [isHoveerd, setIsHovered] = useState(false);
  const { t } = useLanguage();
  return (
    <div
      className="volume-control"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className="volume"
        onClick={toggleMute}
        aria-label={t(isMuted ? "controls.unmute" : "controls.mute")}
      >
        {" "}
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={isMuted ? 0 : volume}
        onChange={(event) => handleVolumeChange(Number(event.target.value))}
        className={isHoveerd ? "volume-slider hovered" : "volume-slider"}
        style={{ "--volume": `${(isMuted ? 0 : volume) * 100}%` }}
      />
    </div>
  );
}
