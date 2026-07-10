/**
 * Displays a single music category card.
 * Receives category data through props.
 */

import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./CategoryCard.css";


function CategoryCard({title, description, songs, image, slug}){
const navigate = useNavigate();
    return(
            
            <div className="category-card">
            
            <div className="category-image">
        <img src={image} alt={title} />

            </div>
            
            <div className="category-details">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{songs}</p>
            <Button onClick={()=> navigate(`/category/${slug}`)}>Explore</Button>
            </div>
    
        </div>
        
    
            
    );
}

export default CategoryCard;