import { useRef, useEffect, useCallback } from "react";
import "./ProgressBar.css";




export default function ProgressBar({
    currentTime,
     duration,
     currentSong, 
     song,
     onSeek
    })
    {
  

    const isCurrentSong = currentSong?.id === song.id;
    const progress = isCurrentSong && duration ? (currentTime / duration) * 100 : 0; 
    const progressBarRef = useRef(null);
    const isDraggingRef = useRef(false);
    
    
    const seek = useCallback((event) => {
        const rect = progressBarRef.current.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const percentage = Math.min(
            Math.max(clickX / rect.width, 0),
            1
        );

        onSeek(percentage);
    }, [onSeek]);
    

    function formatTime(time){
        const minutes = Math.floor(time / 60).toString().padStart(2, "0");
        const seconds = Math.floor(time % 60).toString().padStart(2, "0");

        return `${minutes}: ${seconds}`
    }

    function handleClick(event){
    if(!isCurrentSong) return;
    seek(event)
    }

    

    
    function handleMouseDown(event){

            if(!isCurrentSong) return;
           event.preventDefault();
           isDraggingRef.current = true;
        
    }


    
        function handleMouseUp(){
            isDraggingRef.current = false;
            
        }


        useEffect(() => {
                function handleMouseMove(event){
                    if(!isDraggingRef.current) return;
                    if(!isCurrentSong) return;
                    seek(event)
                    // onSeek(percentage)
                }

                window.addEventListener("mousemove", handleMouseMove);
                window.addEventListener("mouseup", handleMouseUp);

                return () =>{
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("mouseup", handleMouseUp);
                }
            }, [isCurrentSong, seek]);
         

    return(
        <div className="progress-container">

            <div className="progress-bar" onClick={handleClick} ref={progressBarRef} onMouseDown={handleMouseDown}> 
                
           <div className="progress-fill" style={{width: `${progress}%`}} ></div> 
           
        </div>

        <div className="time">
            {isCurrentSong 
             ? `${formatTime(currentTime)} / ${formatTime(duration)}` : ""}
           </div>

        </div>
        
    )
}