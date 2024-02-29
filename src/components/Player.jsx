import { useState } from "react";

export default function Player ({ name, symbol }) {

    const [ isEditing, setIsEditing ] = useState(false);

    function EditClickHandler () {
        setIsEditing(!isEditing);
    }

    return (
        <li>
            <span>
                {isEditing ? <input type="text" required value={ name }/> : <span className="player-name">{ name }</span>}
                <span className="player-symbol">{ symbol }</span>
            </span>
            <button onClick={EditClickHandler}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
} 