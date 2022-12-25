import React, { Component } from 'react'
import Store from './Store';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class Receive extends Component {
  render() {

    return (
      <div>
        <Store/>
        <br/>
        <Link to="/basket">
          <Button variant="primary" style={{margin: '20px'}}>Next</Button>
        </Link>
      </div>
    )
  }
}
