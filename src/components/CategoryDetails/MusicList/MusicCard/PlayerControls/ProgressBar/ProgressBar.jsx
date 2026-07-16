import "./ProgressBar.css";


export default function ProgressBar({
    currentTime,
     duration,
     currentSong, 
     song,
     onSeek
    })
    {
      
    const progress = currentSong?.id === song.id && duration ? (currentTime / duration) * 100 : 0; 
    
    function formatTime(time){
        const minutes = Math.floor(time / 60).toString().padStart(2, "0");
        const seconds = Math.floor(time % 60).toString().padStart(2, "0");

        return `${minutes}: ${seconds}`
    }

    function handleClick(event){

    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percentage = clickX / rect.width;
    onSeek(percentage);

    // console.log({percentage});

    
    // console.log(event.currentTarget.getBoundingClientRect());
    // console.log(event.clientX)
    }

    return(
        <div className="progress-container">

            <div className="progress-bar" onClick={handleClick}>
                
           <div className="progress-fill" style={{width: `${progress}%`}}></div> 
           
        </div>

        <div className="time">
            {progress ? `${formatTime(currentTime)} / ${formatTime(duration)}` : ""}
           </div>

        </div>
        
    )
}