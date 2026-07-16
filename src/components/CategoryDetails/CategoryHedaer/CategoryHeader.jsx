import "./CategoryHeader.css";
import heroVideo from "../../../assets/video/hero.mp4";



export default function CategoryHeader(){
    return(
              <header className="category-header">

                <div className="header-container">
                    <video className="category-header-video" src={heroVideo} autoPlay muted loop playsInline></video>
                </div>
              
            </header>
    )
}