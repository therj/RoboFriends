import React from 'react'
import './card.css'
const Card = ({ id, name, email }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robot-name" />
      <h3 className="name">{name}</h3>
      <p> {email} </p>
    </div>
  )
}

export default Card
