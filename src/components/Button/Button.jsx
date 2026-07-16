/**
 * Reusable button component.
 * Used across the application.
 */

import "./Button.css";

export default function Button({children, onClick}){
    return(
        <button onClick={onClick}>
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