import { useRef, useEffect } from "react";
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


    function formatTime(time){
        const minutes = Math.floor(time / 60).toString().padStart(2, "0");
        const seconds = Math.floor(time % 60).toString().padStart(2, "0");

        return `${minutes}: ${seconds}`
    }

    function handleClick(event){
    if(!isCurrentSong) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percentage = clickX / rect.width;
    onSeek(percentage);

    }

    

    
    function handleMouseDown(event){

            if(!isCurrentSong) return;
           event.preventDefault();
           isDraggingRef.current = true;
           console.log("Drag Started");
           
    
    }

    
        function handleMouseMove(event){
          
          if(!isDraggingRef.current) return;  
          if(!isCurrentSong) return;
          console.log("MouseMove")
          const rect = progressBarRef.current.getBoundingClientRect();
          const clickX = event.clientX - rect.left;
          const percentage = clickX / rect.width;
          console.log("Percentage:",percentage)
          onSeek(percentage)
        }
    
        function handleMouseUp(){
            isDraggingRef.current = false;
            // setIsDragging(false);
            console.log("Drag Ended");
        }
    
          
        useEffect(() => {
    
                
                window.addEventListener("mousemove", handleMouseMove);
                window.addEventListener("mouseup", handleMouseUp);
    
                return () =>{
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("mouseup", handleMouseUp);
                }
            }, [handleMouseMove]);
            // console.log("Render Progress:", currentTime);
    

    return(
        <div className="progress-container">

            <div className="progress-bar" onClick={handleClick} ref={progressBarRef} onMouseDown={handleMouseDown}> 
                
           <div className="progress-fill" style={{width: `${progress}%`}} ></div> 
           
        </div>

        <div className="time">
            {progress ? `${formatTime(currentTime)} / ${formatTime(duration)}` : ""}
           </div>

        </div>
        
    )
}