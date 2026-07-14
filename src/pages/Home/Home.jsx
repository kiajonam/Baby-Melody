import "./Home.css";

import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Categories from "../../components/Categories/Categories";



function Home(){
    return (
<>
    <Navbar />    
    <Hero /> 
    <Categories />
    <Footer />   
</>

    );
}

export default Home;
