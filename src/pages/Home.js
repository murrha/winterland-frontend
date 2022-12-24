import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'

export default class Home extends Component {
  render() {
    return (
      <div>

        <div className = "home">
        <h1>Hearty Helpers</h1>
        <h2>A food donation organization</h2>

        <br/>
        <p>Food insecurity is on the rise in the city of Los Angeles.</p>

        <p>No one should go hungry, so we have created a website where households in need can share their shopping list, and donors can offer money to help with the expenses.</p>
        </div>

        <div className="photos">

        </div>
        
        <div className="user-selection">

          <h2>I want to...</h2>

          <Link to="/donate">
            <Button variant="outline-info" size="lg">Donate</Button>
          </Link>

          <Link to="/receive">
            <Button variant="outline-info" size="lg">Receive</Button>
          </Link>
  
          
        </div>

      </div>
    )
  }
}
