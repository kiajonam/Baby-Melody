/**
 * Displays the selected category and its music tracks.
 * Receives the category object and filtered songs as props.
 */

import "./CategoryDetails.css";
import CategoryHeader from "./CategoryHedaer/CategoryHeader";
import MusicList from "./MusicList/MusicList";


import { useRef, useState, useEffect} from "react";

// import Button from "../Button/Button";

export default function CategoryDetails({category, songs}){

    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    
    



    
    const audioRef = useRef(null);

    
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0);

         useEffect(()=>{
            if(!audioRef.current || !currentSong) return;

            if(isPlaying){
                audioRef.current.play();
            }
            else{
                audioRef.current.pause();
            }
         },[currentSong, isPlaying])


    function handlePlay(song){
        if(currentSong?.id === song.id && isPlaying){
            setIsPlaying(false);
            return;
        }

        setCurrentSong(song);
        setIsPlaying(true);
        
   }

   function handleTimeUpdate(){
    setCurrentTime(audioRef.current.currentTime);
    // console.log("TimeUpdate:", audioRef.current.currentTime);
   }

   function handleLoadedMetadata(){
    console.log(audioRef.current.duration);
    setDuration(audioRef.current.duration);
   }

   

   function handleSeek(percentage){

    if(!audioRef.current) return;
    const newTime = duration * percentage;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime)
    console.log("newTime:", newTime)
    console.log("duration",  duration)
   }



    return (
        <>
        
        <div className="category-details-page">        
        <CategoryHeader category={category} /> 

        <MusicList songs={songs} onPlay={handlePlay} currentSong={currentSong} isPlaying={isPlaying} currentTime={currentTime} duration={duration} onSeek={handleSeek}  />  
        
    
           

           <audio ref={audioRef} src={currentSong?.audio} onLoadedMetadata={handleLoadedMetadata} onTimeUpdate={handleTimeUpdate} ></audio>
        </div>
        </>
    )


}
