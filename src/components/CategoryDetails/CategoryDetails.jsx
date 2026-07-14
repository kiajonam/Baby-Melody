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

    return (
        <>
        
        <div className="category-details-page">
        
        <CategoryHeader category={category} /> 
        <MusicList songs={songs} onPlay={handlePlay} currentSong={currentSong} isPlaying={isPlaying}/>    
           

           <audio ref={audioRef} src={currentSong?.audio}></audio>
        </div>
        </>
    )


}
