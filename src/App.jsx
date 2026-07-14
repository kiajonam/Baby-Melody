/**
 * Root component of the application.
 * Defines the main layout and application routes.
 */

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category"

function  App(){
    return(
        <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/category/:slug" element={<Category />} />
        
        </Routes>
        
    );
}

export default App;