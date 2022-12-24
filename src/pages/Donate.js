import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class Donate extends Component {
  render() {
    
    return (
      <>
      <h2 align="center" style={{margin: '20px'}}>Select a list</h2>

      <Link to="/billing">
        <Button variant="primary">Next</Button>
      </Link>
      </>
    )
  }
}
