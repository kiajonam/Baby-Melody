import "./CategoryHeader.css";



export default function CategoryHeader(){
    return(
        <header className="category-header">
            <div className="header-container">
                <div className="category-header-copy">
                    <span className="category-header-kicker">A gentler moment</span>
                    <h1>Peaceful sound for little moments.</h1>
                    <p>Soft music and soothing sounds for quiet time together.</p>
                </div>
                <div className="category-header-orbit" aria-hidden="true">
                    <span className="category-header-moon"></span>
                    <span className="category-header-star category-header-star-one"></span>
                    <span className="category-header-star category-header-star-two"></span>
                </div>
            </div>
        </header>
    )
}