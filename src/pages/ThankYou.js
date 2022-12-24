import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import {Link } from 'react-router-dom'
export default class ThankYou extends Component {
  render() {
    return (
      <div align="center">

        <h1 style={{margin: '20px'}}>Thank you!</h1>

        <h3>Hearty Helpers and your recipient thank you for your generous donation!</h3>
        <br/>
        
        <Link to="/">
            <Button variant="primary">Homepage</Button>
        </Link>
      </div>
    )
  }
}
