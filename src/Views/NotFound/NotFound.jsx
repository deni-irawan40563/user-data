import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './NotFound.css'

export default class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <img src="https://www.pngkey.com/png/full/185-1853246_well-because-most-of-the-time-it-is.png" alt="not found" />
        <h1 className="">I DON'T KNOW THIS PAGE BRO...</h1>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }
}
