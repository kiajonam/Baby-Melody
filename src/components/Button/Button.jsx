/**
 * Reusable button component.
 * Used across the application.
 */

import "./Button.css";

export default function Button({children, onClick}){
    return(
        <button className="explor-btn" onClick={onClick}>
         {children}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
    );
}