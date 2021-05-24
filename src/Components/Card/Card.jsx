import React from 'react'
import './Card.css'

export default function Card({firstName, lastName, email, country, avatar, id, telephone}) {
  return (
      <>
        <div className="card-container">
          <img className="round" src={avatar} alt={`avatar ${firstName} ${lastName}`} />
          <h3>{firstName} {lastName}</h3>
          <p>front-end developer</p>
          <div className="information">
            <p>Worker Information</p>
            <ul>
              <li>ID</li>
              <li>{id}</li>
              <li>Email</li>
              <li>{email}</li>
              <li>Telephone</li>
              <li>{telephone}</li>
              <li>Country</li>
              <li>{country}</li>
            </ul>
          </div>
        </div>
      </>
  )
}
