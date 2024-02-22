import { useState } from "react";

export default function Player ({ name, symbol }) {

    const [ isEditing, setIsEditing ] = useState(false);

    /* 
        add a function that's triggered when the button is clicked
        change isEditing to true in that function
        show  <span className="player-name"> only when isEditing is false
        show <input> element if isEditing is true
    */

    return (
        <li>
            <span>
                <span className="player-name">{ name }</span>
                <span className="player-symbol">{ symbol }</span>
            </span>
            <button>Edit</button>
        </li>
    )
} 