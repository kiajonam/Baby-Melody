import "./Navbar.css";


function Navbar(){
    return(
        <header className="navbar">
            <div className="nav-container">
                <a href="#" className="nav-logo">BabyMelody</a>
                <input type="checkbox" className="menu-toggle" id="menu-toggle"/>

                <label htmlFor="menu-toggle" className="hamburger"  aria-label="toggle menu">
                    <span className="bar"></span><span className="bar"></span><span className="bar"></span>
                </label>


              <ul className="nav-menu">
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">How It Works</a></li>
                <li><a href="#">Music Library</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#" className="nav-btn">Get Startet</a></li>
              </ul>

            </div>
        </header>

    )
}

export default Navbar;