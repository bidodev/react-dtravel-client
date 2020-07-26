import React from 'react'
import './favorites.styles.scss'

import {useSelector} from "react-redux";

function Favorites() {
    const favoritesList = useSelector((state) => state.favoritesList)

    return (
        <div className="wrapper">
            <h2>Your Favorites</h2>
            {favoritesList.map(({id, name}) => (<li key={id}>{name}</li>))}
        </div>
    )
}

export default Favorites
