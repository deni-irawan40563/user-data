import React from 'react'
import PropTypes from 'prop-types';
import './Card.css'

export default function Card({firstName, lastName, email, country, avatar, id, telephone}) {
  return (
      <>
        <div className="card-container">
          <img className="round" src={avatar} alt={`avatar ${firstName} ${lastName}`} loading="lazy" />
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

Card.defaultProps = {
  avatar: 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg',
  firstName: 'first name |',
  lastName: ' last name',
  id: '00000',
  email: 'email@example.com',
  telephone: '00000',
  country: 'country'
}

Card.propTypes = {
  avatar: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  id: PropTypes.string,
  email: PropTypes.string,
  telephone: PropTypes.string,
  country: PropTypes.string
};