import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

export default class Submit extends Component {
  render() {
    return (
      <>
      <div align="center">
        <h1 style={{margin: '20px'}}>Submitted!</h1>
        <h3>Thank you for sharing your grocery list with us!</h3>
        <br/>
            
        <Link to="/">
            <Button variant="primary">Homepage</Button>
        </Link>
      </div>
      
      </>
    )
  }
}
