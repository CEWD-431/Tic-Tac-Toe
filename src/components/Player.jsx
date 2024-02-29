import { useState } from "react";

export default function Player ({ initialName, symbol }) {
    const [ isEditing, setIsEditing ] = useState(false);
    const [ playerName, setPlayerName ] = useState(initialName);

    function editClickHandler () {
        setIsEditing(editing => !editing);
    }

    function changeHandler(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li>
            <span>
                {isEditing ? <input type="text" required value={ playerName } onChange={changeHandler}/> 
                           : <span className="player-name">{ playerName }</span>}
                <span className="player-symbol">{ symbol }</span>
            </span>
            <button onClick={editClickHandler}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
} 