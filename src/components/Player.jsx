import { useState } from "react";

export default function Player ({ name, symbol }) {

    const [ isEditing, setIsEditing ] = useState(false);

    function EditClickHandler () {
        setIsEditing(true);
    }

    return (
        <li>
            <span>
                {isEditing ? <input type="text" required /> : <span className="player-name">{ name }</span>}
                <span className="player-symbol">{ symbol }</span>
            </span>
            <button onClick={EditClickHandler}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
} 