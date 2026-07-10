/**
 * Displays the selected category page.
 * Retrieves the category based on the URL slug.
 */

import { useParams } from "react-router-dom";
import categories from "../../data/categories";
import CategoryDetails from "../../components/CategoryDetails/CategoryDetails";
import music from "../../data/music";

export default function Category(){

    const {slug} = useParams();
     const filteredSongs = music.filter(song => song.category === slug);
     console.log(filteredSongs);
     
    const category = categories.find(item => item.slug===slug)
    // console.log(category)
    
    return(
        <>
            <CategoryDetails category={category}
                songs={filteredSongs}
            />
        </>
    )
}