import "./Navbar.css";

function Navbar(){
    return(
        <nav className="navbar">

           <div className="logo">
            Baby Melody
            </div> 

        <ul className="nav-links">
        <li>Home</li>
        <li>Categories</li>
        <li>About</li>
        <li>Contact</li>
        </ul>

        </nav>
    )
}

export default Navbar;