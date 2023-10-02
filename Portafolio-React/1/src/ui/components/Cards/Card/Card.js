import React from 'react'
import "./card.css"

const Card = (props) => {
    // plantilla de card
    // aca se presentará las cards de 
    // proyectos terminados y en desarollo
    return (
        <div className='card__contenedor'>
            <img className='card__img' src={props.img} alt='foto' />
            <div className='card__data'>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <a href={props.link}>{props.nameLink}</a>
            </div>
        </div >
    )
}

export default Card
