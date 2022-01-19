import React from "react";

import './card.styles.css';

export const Card = (props) => {
    return (
    <div className="card-container">
        <img alt="monster" width='100%' height='180px' src={ `/monsters-rolodex-react-course/imgs/${props.monster.id}.jpg` /*`https://robohash.org/${props.monster.id}?set=set2&size=180x180`*/} />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
    )
}