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

    const audioRef = useRef(null);

         useEffect(()=>{
            if(currentSong){
                audioRef.current.play();
            }
         },[currentSong])

    function handlePlay(song){

        setCurrentSong(song)
        
   }

   
  

    return (
        <>
        
        <div className="category-details-page">
        
        <CategoryHeader category={category} /> 
        <MusicList songs={songs} onPlay={handlePlay} />    
           

           <audio ref={audioRef} src={currentSong?.audio}></audio>
        </div>
        </>
    )


}
